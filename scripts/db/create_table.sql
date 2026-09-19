CREATE TABLE IF NOT EXISTS invitations (
  id SERIAL PRIMARY KEY,
  token TEXT NOT NULL UNIQUE,
  source TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Index on token for fast lookup
CREATE UNIQUE INDEX IF NOT EXISTS idx_invitations_token ON invitations(token);
