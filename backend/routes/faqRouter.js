
const express = require('express');
const router = express.Router();

const { authenticateUser, roleCheck }  = require('../middlewares/authentication')

const Faq = require('../controllers/Faq')

router.route('/')
  .get(Faq.getAll)
  .post(authenticateUser, roleCheck(['admin']), Faq.create)

router.route('/:id')
  .put(authenticateUser, roleCheck(['admin']), Faq.update) 
  .delete(authenticateUser, roleCheck(['admin']), Faq.remove)

module.exports = router;
