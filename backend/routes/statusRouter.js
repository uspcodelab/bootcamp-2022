const express = require('express');
const router = express.Router();

const {
  getStatusPage,
  createStatus,
  updateStatus,
  deleteStatus
} = require('../controllers/status')

router.route('/')
  .get(getStatusPage) // get all the quotes
  .post(createStatus) // create a new quote

router.route('/:id')
  .patch(updateStatus) // update status of status
  .delete(deleteStatus)

module.exports = router;
