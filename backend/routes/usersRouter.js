
const express = require('express');
const router = express.Router();
const config = require('../config')

const { 
  authenticateUser,
  roleCheck,
  personalChangesPermissionCheck
}  = require('../middlewares/authentication')

const User = require('../controllers/User')

router.route('/')
  .get(authenticateUser, roleCheck(config.privilegedRoles), User.getPage)

router.route('/showMe')
  .get(authenticateUser, User.showMe)

router.route('/update-password')
  .patch(authenticateUser, User.updatePassword)

router.route('/update-mail')
  .patch(authenticateUser, User.updateMail)

router.route('/update-role')
  .patch(authenticateUser, roleCheck(config.privilegedRoles), User.updateRole)

router.route('/:id')
  .get(authenticateUser, personalChangesPermissionCheck(config.privilegedRoles), User.getUser)
  .delete(authenticateUser, personalChangesPermissionCheck(config.privilegedRoles), User.remove)

module.exports = router;
