import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Pool } from 'pg';
import QRCode from 'qrcode';
import { PNG } from 'pngjs';
import jsQR from 'jsqr';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const regularQrDir = path.join(projectRoot, 'generated-qrs');
const vipOutputDir = path.join(projectRoot, 'generated-vip-qrs');
const vipTempDir = path.join(projectRoot, `.generated-vip-qrs-${process.pid}`);
const VIP_COUNT = 300;
const VIP_SOURCE = 'DARI-VIP-BATCH';

// ---------- env loading (same robust approach as the existing scripts) ----------
async function loadDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  try {
    const envFile = await fs.readFile(path.join(projectRoot, '.env.local'), 'utf8');
    for (const rawLine of envFile.split(/\r?\n/)) {
      const trimmed = rawLine.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx === -1) continue;
      let key = trimmed.slice(0, idx).trim().replace(/^export\s+/i, '');
      let val = trimmed.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (key === 'DATABASE_URL') return val;
    }
    return undefined;
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
}

// ---------- step 1: ensure ticket_type column exists ----------
async function ensureTicketTypeColumn(client) {
  await client.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'invitations' AND column_name = 'ticket_type'
      ) THEN
        ALTER TABLE invitations ADD COLUMN ticket_type text;
      END IF;
    END $$;
  `);
  await client.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'invitations_ticket_type_check'
      ) THEN
        ALTER TABLE invitations
          ADD CONSTRAINT invitations_ticket_type_check CHECK (ticket_type IN ('regular', 'vip'));
      END IF;
    END $$;
  `);
}

// ---------- step 2: decode the real DARI-*.png files to get the true 700 tokens ----------
async function decodeRegularTokensFromPngs() {
  let entries;
  try {
    entries = await fs.readdir(regularQrDir);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Could not find ${regularQrDir}. Run this script from the project root with generated-qrs/ present.`);
    }
    throw error;
  }

  const pngFiles = entries.filter((name) => /^DARI-\d{3}\.png$/.test(name)).sort();
  if (pngFiles.length === 0) {
    throw new Error(`No DARI-*.png files found in ${regularQrDir}.`);
  }

  const tokens = [];
  const failures = [];

  for (const file of pngFiles) {
    const filePath = path.join(regularQrDir, file);
    const buffer = await fs.readFile(filePath);
    const png = PNG.sync.read(buffer);
    const result = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
    if (!result || !result.data) {
      failures.push(file);
      continue;
    }
    tokens.push(result.data.trim());
  }

  return { pngFiles, tokens, failures };
}

// ---------- step 3: safely mark those exact tokens as regular ----------
async function markRegularTokens(client, tokens) {
  const uniqueTokens = [...new Set(tokens)];

  const existing = await client.query(
    'SELECT token FROM invitations WHERE token = ANY($1::text[])',
    [uniqueTokens],
  );
  const existingSet = new Set(existing.rows.map((row) => row.token));
  const missing = uniqueTokens.filter((token) => !existingSet.has(token));

  const updateResult = await client.query(
    `UPDATE invitations SET ticket_type = 'regular'
     WHERE token = ANY($1::text[]) AND ticket_type IS DISTINCT FROM 'regular'`,
    [uniqueTokens],
  );

  return {
    decodedUnique: uniqueTokens.length,
    matchedInDb: existingSet.size,
    missingFromDb: missing,
    updatedRows: updateResult.rowCount,
  };
}

// ---------- VIP batch: safety check ----------
async function checkExistingVipBatch(client) {
  const result = await client.query(
    'SELECT token FROM invitations WHERE source = $1 ORDER BY id',
    [VIP_SOURCE],
  );
  if (result.rowCount === 0) return null;
  if (result.rowCount !== VIP_COUNT) {
    throw new Error(
      `Found ${result.rowCount} existing "${VIP_SOURCE}" records, expected exactly 0 or ${VIP_COUNT}. ` +
      `Refusing to proceed automatically — please investigate the database manually before re-running.`,
    );
  }
  return result.rows.map((row) => row.token);
}

async function ensureVipOutputDoesNotExist() {
  try {
    await fs.access(vipOutputDir);
    throw new Error(`${vipOutputDir} already exists. The VIP batch appears to have already been generated; refusing to overwrite.`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

function createVipToken() {
  return crypto.randomBytes(24).toString('hex');
}

function createUniqueVipTokens() {
  const tokens = new Set();
  while (tokens.size < VIP_COUNT) tokens.add(createVipToken());
  return [...tokens];
}

async function generateVipPngs(tokens) {
  await fs.mkdir(vipTempDir, { recursive: false });
  for (let start = 0; start < tokens.length; start += 25) {
    const batch = tokens.slice(start, start + 25);
    await Promise.all(batch.map((token, offset) => {
      const index = start + offset;
      const filename = `VIP-${String(index + 1).padStart(3, '0')}.png`;
      return QRCode.toBuffer(token, {
        type: 'png',
        errorCorrectionLevel: 'H',
        margin: 4,
        width: 600,
      }).then((buffer) => fs.writeFile(path.join(vipTempDir, filename), buffer));
    }));
  }
}

async function insertVipTokens(client, tokens) {
  await client.query('BEGIN');
  try {
    const existing = await client.query(
      'SELECT token FROM invitations WHERE token = ANY($1::text[])',
      [tokens],
    );
    if (existing.rowCount !== 0) {
      throw new Error('A generated VIP token already exists in the database; aborting without inserts.');
    }
    await client.query(
      'INSERT INTO invitations (token, source, ticket_type) SELECT unnest($1::text[]), $2, $3',
      [tokens, VIP_SOURCE, 'vip'],
    );
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  }
}

async function main() {
  const connectionString = await loadDatabaseUrl();
  if (!connectionString) {
    console.error('DATABASE_URL is not set (checked process.env and .env.local). Aborting.');
    process.exitCode = 1;
    return;
  }

  const pool = new Pool({ connectionString });
  const client = await pool.connect();

  try {
    console.log('Connected to database.');

    await ensureTicketTypeColumn(client);
    console.log('ticket_type column ensured (and check constraint applied).');

    console.log(`Decoding QR PNGs in ${regularQrDir} ...`);
    const { pngFiles, tokens, failures } = await decodeRegularTokensFromPngs();
    console.log(`Found ${pngFiles.length} PNG files, decoded ${tokens.length} tokens.`);
    if (failures.length > 0) {
      console.warn(`WARNING: could not decode ${failures.length} file(s): ${failures.join(', ')}`);
    }
    if (pngFiles.length !== 700) {
      console.warn(`WARNING: expected 700 DARI-*.png files, found ${pngFiles.length}.`);
    }

    const markResult = await markRegularTokens(client, tokens);
    console.log(`Decoded ${markResult.decodedUnique} unique tokens from PNGs.`);
    console.log(`Matched ${markResult.matchedInDb} of them in the database.`);
    console.log(`Marked ${markResult.updatedRows} row(s) as ticket_type = 'regular'.`);
    if (markResult.missingFromDb.length > 0) {
      console.warn(
        `WARNING: ${markResult.missingFromDb.length} token(s) decoded from PNG files were NOT found in the database. ` +
        `These were left untouched: ${markResult.missingFromDb.join(', ')}`,
      );
    }
    console.log(
      'Note: any other rows in "invitations" (e.g. from the earlier duplicate generation attempt) ' +
      'were NOT modified and were NOT deleted — only tokens matched from the actual PNG files were marked regular.',
    );

    console.log('Checking for an existing VIP batch...');
    const existingVipTokens = await checkExistingVipBatch(client);
    if (existingVipTokens) {
      console.log(`A complete VIP batch of ${existingVipTokens.length} tokens already exists in the database (source = "${VIP_SOURCE}").`);
      console.log('Nothing further to insert. If you need the PNGs regenerated, do that separately from the existing tokens.');
      return;
    }

    await ensureVipOutputDoesNotExist();

    console.log(`Generating ${VIP_COUNT} new VIP tokens...`);
    const vipTokens = createUniqueVipTokens();

    try {
      await generateVipPngs(vipTokens);
      await insertVipTokens(client, vipTokens);
      await fs.cp(vipTempDir, vipOutputDir, { recursive: true, errorOnExist: true });
      await fs.rm(vipTempDir, { recursive: true, force: true });

      console.log(`Inserted ${vipTokens.length} new VIP invitations into the database.`);
      console.log(`Generated ${vipTokens.length} VIP PNGs in ${vipOutputDir}`);
      console.log('Done.');
    } catch (error) {
      await fs.rm(vipTempDir, { recursive: true, force: true });
      throw error;
    }
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((error) => {
  console.error(`Setup failed: ${error.message}`);
  process.exitCode = 1;
});