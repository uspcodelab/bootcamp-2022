
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const Warning = require('../controllers/Warning')

router.route('/')
  .get(Warning.getPage) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), Warning.create) 

router.route('/:id')
  .delete(authenticateUser, roleCheck(config.privilegedRoles), Warning.remove)
  .put(authenticateUser, roleCheck(config.privilegedRoles), Warning.update)

module.exports = router;
