import fs from 'node:fs';
import path from 'node:path';
import { Pool } from 'pg';

const projectRoot = path.resolve(import.meta.dirname, '../..');
const envPath = path.join(projectRoot, '.env.local');

if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Add it to .env.local or the environment.');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

try {
  await pool.query('ALTER TABLE invitations ADD COLUMN IF NOT EXISTS scan_count INTEGER DEFAULT 0');
  console.log('Migration complete: invitations.scan_count is available.');
} finally {
  await pool.end();
}