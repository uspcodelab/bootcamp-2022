const express = require('express');
const router = express.Router();
const machine_status = require('../services/machine_status');

/* GET machine_status listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await machine_status.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting machine status `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST machine_status */
// responds a json that informs if the post was sucessful or not
router.post('/', async function(req, res, next) {
  try {
    res.json(await machine_status.create(req.body));
  } catch (err) {
    console.error(`Error while posting machine status `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
