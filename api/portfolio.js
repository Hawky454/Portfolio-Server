const express = require('express');
const router = express.Router();
const queries = require('../database/queries');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

// function isValidId(req, res, next) {
//   if (!isNaN(req.params.id)) return next();
//   next(new Error('Invalid ID'));
// }

function validateEntries(portfolio) {
  //todo still trying to figure out how to properly validate entries
  const firstName = isNaN(portfolio.firstName);
  const lastName = isNaN(portfolio.lastName);
  const reason = isNaN(portfolio.reason);
  const comment = isNaN(portfolio.comment);
  const email = isNaN(portfolio.email);
  return firstName && lastName && reason && comment & email;
}

router.get('/', (req, res) => {
  queries.getAll().then(portfolio => {
    res.json(portfolio);
    console.table(portfolio);
  });
});

router.post('/', (req, res, next) => {
  if (validateEntries(req.body)) {
    queries.create(req.body).then(portfolio => {
      res.json(portfolio[0]);
      console.log(portfolio[0]);
    });
  } else {
    next(new Error('Invalid Entry Buckaroo'));
  }
});

module.exports = router;
