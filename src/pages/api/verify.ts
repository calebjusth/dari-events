import type { APIRoute } from 'astro';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ?? import.meta.env.DATABASE_URL,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const token = body?.token;

    if (!token || typeof token !== 'string') {
      return new Response(JSON.stringify({ valid: false, message: 'Missing token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = await pool.connect();
    try {
      const res = await client.query(
        `UPDATE invitations
         SET scan_count = COALESCE(scan_count, 0) + 1
         WHERE token = $1
         RETURNING token, source, expires_at, ticket_type, scan_count`,
        [token],
      );
      if (res.rowCount === 0) {
        return new Response(JSON.stringify({ valid: false, message: 'NO QR CODE FOUND' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const row = res.rows[0];
      return new Response(
        JSON.stringify({
          valid: true,
          message: 'VALID QR CODE',
          ticketType: row.ticket_type ?? null,
          source: row.source ?? null,
          expiresAt: row.expires_at ?? null,
          scanCount: row.scan_count,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } finally {
      client.release();
    }
  } catch (err) {
    return new Response(JSON.stringify({ valid: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};