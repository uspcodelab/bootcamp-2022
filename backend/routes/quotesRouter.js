
const express = require('express');
const router = express.Router();

const { authenticateUser, authorizePermissions }  = require('../middlewares/authentication')

const {
  getQuotesPage,
  createQuote
} = require('../controllers/quotes')

router.route('/')
  .get(getQuotesPage) 
  .post(authenticateUser, authorizePermissions(['admin']), createQuote) 

module.exports = router;
