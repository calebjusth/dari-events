import { randomBytes } from 'crypto';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

function genToken() {
  return randomBytes(24).toString('hex');
}

async function seed(count = 600, source = 'default-batch') {
  const client = await pool.connect();
  try {
    for (let i = 0; i < count; i++) {
      const token = genToken();
      await client.query(
        'INSERT INTO invitations(token, source) VALUES($1, $2) ON CONFLICT DO NOTHING',
        [token, source]
      );
      if ((i + 1) % 100 === 0) console.log(`Inserted ${i + 1}`);
    }
    console.log('Seeding complete');
  } finally {
    client.release();
    await pool.end();
  }
}

const count = parseInt(process.env.SEED_COUNT || '600', 10);
const source = process.env.SEED_SOURCE || 'default-batch';

seed(count, source).catch((err) => {
  console.error(err);
  process.exit(1);
});
