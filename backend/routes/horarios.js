const express = require('express');
const router = express.Router();
const horarios = require('../services/horarios');

/* GET horarios listing. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await horarios.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Erro ao recuperar horarios `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
