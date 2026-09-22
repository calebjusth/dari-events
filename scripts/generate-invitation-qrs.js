import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Pool } from 'pg';
import QRCode from 'qrcode';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'generated-qrs');
const temporaryDirectory = path.join(projectRoot, `.generated-qrs-${process.pid}`);
const total = 700;
const source = 'DARI-QR-BATCH';

async function loadDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  try {
    const envFile = await fs.readFile(path.join(projectRoot, '.env.local'), 'utf8');
    const line = envFile.split(/\r?\n/).find((value) => value.trim().startsWith('DATABASE_URL='));
    if (!line) return undefined;
    return line.slice(line.indexOf('=') + 1).trim().replace(/^(["'])(.*)\1$/, '$2');
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
}

function createToken() {
  return crypto.randomBytes(24).toString('hex');
}

async function ensureOutputDoesNotExist() {
  try {
    await fs.access(outputDirectory);
    throw new Error('generated-qrs already exists; refusing to overwrite an existing batch.');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

function createUniqueTokens() {
  const tokens = new Set();
  while (tokens.size < total) tokens.add(createToken());
  return [...tokens];
}

async function generatePngs(tokens) {
  await fs.mkdir(temporaryDirectory, { recursive: false });

  for (let start = 0; start < tokens.length; start += 25) {
    const batch = tokens.slice(start, start + 25);
    await Promise.all(batch.map((token, offset) => {
      const index = start + offset;
      const filename = `DARI-${String(index + 1).padStart(3, '0')}.png`;
      return QRCode.toBuffer(token, {
        type: 'png',
        errorCorrectionLevel: 'H',
        margin: 4,
        width: 600,
      }).then((buffer) => fs.writeFile(path.join(temporaryDirectory, filename), buffer));
    }));
  }
}

async function insertTokens(tokens) {
  const connectionString = await loadDatabaseUrl();
  if (!connectionString) throw new Error('DATABASE_URL is not set.');

  const pool = new Pool({ connectionString });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const existing = await client.query(
      'SELECT token FROM invitations WHERE token = ANY($1::text[])',
      [tokens],
    );
    if (existing.rowCount !== 0) {
      throw new Error('A generated token already exists in the database; aborting without inserts.');
    }

    await client.query(
      'INSERT INTO invitations (token, source) SELECT unnest($1::text[]), $2',
      [tokens, source],
    );

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

async function getExistingBatchTokens() {
  const connectionString = await loadDatabaseUrl();
  if (!connectionString) throw new Error('DATABASE_URL is not set.');

  const pool = new Pool({ connectionString });
  try {
    const result = await pool.query(
      'SELECT token FROM invitations WHERE source = $1 ORDER BY id',
      [source],
    );
    if (result.rowCount === 0) return null;
    if (result.rowCount < total) {
      throw new Error(`An incomplete ${source} batch already exists (${result.rowCount} records); refusing to add another batch.`);
    }
    return result.rows.slice(-total).map((row) => row.token);
  } finally {
    await pool.end();
  }
}

async function main() {
  await ensureOutputDoesNotExist();
  const existingTokens = await getExistingBatchTokens();
  const tokens = existingTokens ?? createUniqueTokens();

  try {
    await generatePngs(tokens);
    if (!existingTokens) await insertTokens(tokens);
    await fs.cp(temporaryDirectory, outputDirectory, { recursive: true, errorOnExist: true });
    await fs.rm(temporaryDirectory, { recursive: true, force: true });
    console.log(`Generated tokens: ${tokens.length}`);
    console.log(`Inserted into database: ${tokens.length}`);
    console.log(`Generated PNGs: ${tokens.length}`);
    console.log('Output folder: generated-qrs');
  } catch (error) {
    await fs.rm(temporaryDirectory, { recursive: true, force: true });
    throw error;
  }
}

main().catch((error) => {
  console.error(`QR generation failed: ${error.message}`);
  process.exitCode = 1;
});