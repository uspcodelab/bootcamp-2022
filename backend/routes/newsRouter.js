
const express = require('express');
const router = express.Router();
const config = require('../config')

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const News = require('../controllers/News')

router.route('/')
  .get(News.getPage) 
  .post(authenticateUser, roleCheck(config.privilegedRoles), News.create) 

router.route('/:id')
  .get(News.getNews)
  .delete(authenticateUser, roleCheck(config.privilegedRoles), News.remove)
  .put(authenticateUser, roleCheck(config.privilegedRoles), News.update)

module.exports = router;
