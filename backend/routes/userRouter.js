
const express = require('express');
const router = express.Router();

const { authenticateUser, authorizePermissions }  = require('../middlewares/authentication')

const {
  getUserPage
} = require('../controllers/user')

router.route('/')
  .get(authenticateUser, authorizePermissions(['admin']), getUserPage)

module.exports = router;
