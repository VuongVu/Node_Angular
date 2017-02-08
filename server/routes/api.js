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

// Get a list of customers
router.get('/customer-list/test', (req, res, next) => {
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
    const query = client.query('SELECT * from customers ORDER BY id ASC;');
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

  // Grab data from http request
  const data = {
    kaisha: req.body.kaisha,
    busho_1: req.body.busho,
    busho_2: req.body.busho,
    namae: req.body.namae
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
    const query = client.query('SELEC * from customers WHERE namae=($1)', [data.kaisha]);
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
