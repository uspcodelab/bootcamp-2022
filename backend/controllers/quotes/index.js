
const { StatusCodes } = require('http-status-codes')
const quotesService = require('../../services/quotes/quotesService');

const createQuote = async (req, res) => {
  await quotesService.create(req.body)
  res.status(StatusCodes.CREATED).json({
    message: 'Success'
  });
}

const getQuotesPage = async (req, res) => {
  const { data, meta } = await quotesService.getMultiple(req.query.page) // default value === 1
  res.status(StatusCodes.OK).json({
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

module.exports = {
  createQuote,
  getQuotesPage 
}
