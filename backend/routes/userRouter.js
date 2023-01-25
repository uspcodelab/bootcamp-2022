
const express = require('express');
const router = express.Router();

const {
  createUser,
  getUserPage
} = require('../controllers/user')

router.route('/')
  .post(createUser) // create a new quote
  .get(getUserPage)

module.exports = router;
