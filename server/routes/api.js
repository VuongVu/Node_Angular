const express = require('express');
const router = express.Router();
const pg = require('pg');

// Database configuration
const config = {
  host: 'localhost',
  port: 5432,
  database: 'nengajoukanri',
  user: 'postgres',
  password: '123'
};

// Get API listing
router.get('/', (req, res, next) => {
  res.send('Route API works!');
});

// Get all users 
router.get('/users', (req, res, next) => {
  const results = [];

  // Get a Postgres client from the connection pool
  pg.connect(config, (err, client, done) => {
    // Handle connection error
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({
        success: false,
        data: err
      });
    }

    // SQL Query > Select Data
    const query = client.query('SELECT * from users ORDER BY id ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

// Get a list of customers with conditions
router.get('/customer-list', (req, res, next) => {
  const results = [];

  // Grab data from url parameters
  const data = {
    'kaisha': req.query.kaisha,
    'busho_1': req.query.busho,
    'busho_2': req.query.busho,
    'namae': req.query.namae
  };

  // Get a Postgres client from the connection pool
  pg.connect(config, (err, client, done) => {
    // Handle connection error
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({
        success: false,
        data: err
      });
    }

    // SQL Query > Select Data
    const query = client.query({
      text: 'SELECT * FROM customers WHERE kaisha LIKE \'%' + data.kaisha + '%\' AND (busho_1 LIKE \'%' + data.busho_1 + '%\' OR busho_2 LIKE \'%' + data.busho_2 + '%\') AND namae LIKE \'%' + data.namae + '%\' ORDER BY id ASC;'
    }, (err) => {
      if (err) console.log(err);
    });
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;