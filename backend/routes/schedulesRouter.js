
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const Schedule = require('../controllers/Schedule')

router.route('/')
  .get(Schedule.getAll) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), Schedule.create) 

router.route('/:id')
  .delete(authenticateUser, roleCheck(config.privilegedRoles), Schedule.remove)
  .put(authenticateUser, roleCheck(config.privilegedRoles), Schedule.update)

module.exports = router;
