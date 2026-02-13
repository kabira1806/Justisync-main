const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Cloud Database (Neon) ke liye yeh zaroori hai
  }
});

pool.connect()
  .then(() => console.log('✅ Cloud Database Connected Successfully!'))
  .catch(err => console.error('❌ Database Connection Error:', err.message));

module.exports = pool;