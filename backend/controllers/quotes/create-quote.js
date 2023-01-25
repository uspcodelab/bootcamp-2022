
const { StatusCodes } = require('http-status-codes')
const quotesService = require('../../services/quotesService');

const createQuote = async (req, res) => {
  await quotesService.create(req.body)
  res.status(StatusCodes.CREATED).json({
    message: 'Success'
  });
}

module.exports = createQuote
