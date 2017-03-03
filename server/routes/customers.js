const express = require('express');
const router = express.Router();

const models = require('../models');

// Get a list of customers with conditions
// router.get('/list', (req, res, next) => {
//   const results = [];

//   // Grab data from url parameters
//   const data = {
//     'kaisha': req.query.kaisha,
//     'busho': req.query.busho,
//     'namae': req.query.namae
//   };

//   // Get a Postgres client from the connection pool
//   pg.connect(db_config, (err, client, done) => {
//     // Handle connection error
//     if (err) {
//       done();
//       console.log(err);
//       return res.status(500).json({
//         success: false,
//         msg: err
//       });
//     }

//     // SQL Query > Select Data
//     const query = client.query({
//       text: 'SELECT * FROM customers ' +
//         'WHERE kaisha LIKE \'%' + data.kaisha + '%\'' +
//         'AND busho LIKE \'%' + data.busho + '%\' AND namae LIKE \'%' + data.namae + '%\' ORDER BY id ASC;'
//     }, (err) => {
//       if (err) console.log(err);
//     });

//     // Stream results back one row at a time
//     query.on('row', (row) => {
//       results.push(row);
//     });

//     // After all data is returned, close connection and return results
//     query.on('end', () => {
//       done();
//       return res.json(results);
//     });
//   });
// });

// Get all customer items
router.get('/items', (req, res, next) => {
  models.customers.findAll({
    order: 'id DESC'
  })
  .then((customers) => {
    res.json(customers);
  });
});

module.exports = router;
