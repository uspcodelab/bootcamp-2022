
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const Slide = require('../controllers/Slide')

router.route('/')
  .get(Slide.getAll) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), Slide.create) 

router.route('/:id')
  .delete(authenticateUser, roleCheck(config.privilegedRoles), Slide.remove)
  .put(authenticateUser, roleCheck(config.privilegedRoles), Slide.update)

module.exports = router;
