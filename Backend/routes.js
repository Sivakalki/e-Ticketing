const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import the PostgreSQL connection pool

// Example route to fetch data from PostgreSQL
router.get('/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

