
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const WarningClass = require('../controllers/Warning-Class')

router.route('/')
  .get(WarningClass.getAll) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), WarningClass.create) 

router.route('/:id')
  .delete(authenticateUser, roleCheck(config.privilegedRoles), WarningClass.remove)
  .put(authenticateUser, roleCheck(config.privilegedRoles), WarningClass.update)

module.exports = router;
