
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const Quote = require('../controllers/Quote')

router.route('/')
  .get(Quote.getPage) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), Quote.create) 

router.route('/:id')
  .delete(authenticateUser, roleCheck(config.privilegedRoles), Quote.remove)
  .patch(authenticateUser, roleCheck(config.privilegedRoles), Quote.updateContent)

module.exports = router;
