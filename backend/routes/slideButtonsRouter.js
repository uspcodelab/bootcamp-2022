
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const SlideButton = require('../controllers/Slide-Button')

router.route('/')
  .get(SlideButton.getPage) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), SlideButton.create) 

router.route('/:id')
  .delete(authenticateUser, roleCheck(config.privilegedRoles), SlideButton.remove)
  .put(authenticateUser, roleCheck(config.privilegedRoles), SlideButton.update)

module.exports = router;
