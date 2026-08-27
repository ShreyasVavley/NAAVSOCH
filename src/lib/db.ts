import Database from 'better-sqlite3';
import path from 'path';

const dbPath = process.env.VERCEL ? path.join('/tmp', 'naavsoch.db') : path.join(process.cwd(), 'naavsoch.db');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let db: any;

try {
  db = new Database(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
} catch (e) {
  console.error("Failed to initialize SQLite database:", e);
  db = {
    prepare: () => ({ all: () => [], run: () => ({}) }),
    exec: () => {}
  };
}

export default db;
