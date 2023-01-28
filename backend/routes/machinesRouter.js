const express = require('express');
const router = express.Router();

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const Machine = require('../controllers/Machine')

router.route('/')
  .get(Machine.getPage)
  .post(authenticateUser, roleCheck(['admin']), Machine.create)

router.route('/:id')
  .put(authenticateUser, roleCheck(['admin']), Machine.update) 
  .delete(authenticateUser, roleCheck(['admin']), Machine.remove)

module.exports = router;
