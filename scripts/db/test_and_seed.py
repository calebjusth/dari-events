import os
import sys
from pathlib import Path
import secrets

env_file = Path('.') / '.env.local'
if env_file.exists():
    with env_file.open() as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            k, v = line.split('=', 1)
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            if k not in os.environ:
                os.environ[k] = v

DATABASE_URL = os.environ.get('DATABASE_URL')
if not DATABASE_URL:
    print('DATABASE_URL not set')
    sys.exit(1)

import psycopg

SQL = Path('scripts/db/create_table.sql').read_text()

with psycopg.connect(DATABASE_URL) as conn:
    with conn.cursor() as cur:
        cur.execute(SQL)
        token = secrets.token_hex(24)
        cur.execute("INSERT INTO invitations(token, source, used) VALUES(%s, %s, %s) RETURNING token", (token, 'DARI_TEST', False))
        t = cur.fetchone()[0]
        print('TEST_TOKEN:' + t)
