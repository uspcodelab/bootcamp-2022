
const express = require('express');
const router = express.Router();

const {
  getQuotesPage,
  createQuote
} = require('../controllers/quotesControllers')

router.route('/')
  .get(getQuotesPage) // get all the quotes
  .post(createQuote) // create a new quote

module.exports = router;
