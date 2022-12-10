const express = require('express');
const router = express.Router();
const avisos = require('../services/avisos');

/* GET avisos listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await avisos.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Erro ao recuperar avisos `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
