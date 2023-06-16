CREATE DATABASE bets;

\c bets;

CREATE TABLE bets (
  id SERIAL PRIMARY KEY,
  event VARCHAR(100),
  selection VARCHAR(100),
  stake NUMERIC(10, 2),
  odds NUMERIC(10, 2),
  status VARCHAR(10) CHECK (status IN ('WON', 'LOST', 'IN PLAY', 'HALF_LOST', 'HALF_WON', 'VOID'))
);