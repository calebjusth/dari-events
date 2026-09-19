import fs from 'fs';
import path from 'path';
import dns from 'dns';
import net from 'net';

// Load .env.local if present (same logic as test script)
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
    key = key.replace(/^export\s+/i, '').trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL present: false');
  process.exit(1);
}

let hostname = null;
let port = null;
try {
  const u = new URL(process.env.DATABASE_URL);
  hostname = u.hostname;
  port = u.port || '5432';
} catch (e) {
  console.error('Failed to parse DATABASE_URL');
  process.exit(1);
}

console.log('DATABASE_URL present: true');
console.log('Host to resolve:', hostname);
console.log('Port to test:', port);

dns.lookup(hostname, (err, address) => {
  if (err) {
    console.error('DNS lookup failed:', err.message);
    process.exit(1);
  }
  console.log('DNS resolved to:', address);

  const socket = net.createConnection({ host: hostname, port: Number(port), timeout: 3000 }, () => {
    console.log('TCP connection to host:port succeeded (port open)');
    socket.end();
    process.exit(0);
  });

  socket.on('error', (e) => {
    console.error('TCP connection failed:', e.message);
    process.exit(1);
  });

  socket.on('timeout', () => {
    console.error('TCP connection timed out');
    socket.destroy();
    process.exit(1);
  });
});
