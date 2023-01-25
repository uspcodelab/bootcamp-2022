
const express = require('express');
const router = express.Router();

const {
  getUserPage
} = require('../controllers/user')

router.route('/')
  .get(getUserPage)

module.exports = router;
