const express = require('express');
const router = express.Router();

const models = require('../models');

// Get all users 
router.get('/', (req, res, next) => {
  models.users.findAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;