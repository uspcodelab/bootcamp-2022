
const { StatusCodes } = require('http-status-codes')
const quotesService = require('../services/quotesService');

const getQuotesPage = async (req, res) => {
  const { data, meta }= await quotesService.getMultiple(req.query.page)
  res.status(StatusCodes.OK).json({
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

module.exports = getQuotesPage 
