const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const query = async (text, params) => {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;
  if (process.env.LOG_QUERIES === 'true') {
    console.log('executed query', { text, duration, rows: result.rowCount });
  }
  return result;
};

module.exports = {
  pool,
  query,
};
