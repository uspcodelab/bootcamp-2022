const express = require('express');
const router = express.Router();

const { authenticateUser, authorizePermissions }  = require('../middlewares/authentication')

const {
  getStatusPage,
  createStatus,
  updateStatus,
  deleteStatus
} = require('../controllers/status')

router.route('/')
  .get(getStatusPage)
  .post(authenticateUser, authorizePermissions(['admin']), createStatus)

router.route('/:id')
  .patch(authenticateUser, authorizePermissions(['admin']), updateStatus) 
  .delete(authenticateUser, authorizePermissions(['admin']), deleteStatus)

module.exports = router;
