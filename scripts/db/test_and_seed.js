import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';
import { randomBytes } from 'crypto';

// Load .env.local if present (robust: strip export prefix and surrounding quotes)
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    let trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    let key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    // support lines starting with `export VAR=...`
    key = key.replace(/^export\s+/i, '').trim();
    // strip surrounding matching quotes (single or double)
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set. Aborting.');
  process.exit(1);
}

// Use the connection string as provided (should now be unquoted)
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const sqlPath = path.resolve(process.cwd(), 'scripts', 'db', 'create_table.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');

  const client = await pool.connect();
  try {
    // Create table
    await client.query(sql);

    // Generate a cryptographically secure token
    const token = randomBytes(24).toString('hex');

    // Insert single test invitation
    const insertText = 'INSERT INTO invitations(token, source, used) VALUES($1, $2, $3) RETURNING id, token';
    const res = await client.query(insertText, [token, 'DARI_TEST', false]);
    const row = res.rows[0];

    // Output success messages (do NOT expose DATABASE_URL)
    console.log('DATABASE CONNECTION: SUCCESS');
    console.log('TEST_TOKEN:' + row.token);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error('ERROR:', err?.message || err);
  process.exit(1);
});
