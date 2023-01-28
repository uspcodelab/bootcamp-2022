
const { StatusCodes } = require('http-status-codes')
const quotesService = require('../../services/quotes/quotesService');

const create = async (req, res) => {
  await quotesService.createQuote(req.body)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const getPage = async (req, res) => {
  const { data, meta } = await quotesService.getMultipleQuotes(req.query.page) // default value === 1
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    }
  });
}

const remove = async (req, res) => {
  const id = req.params.id
  await quotesService.deleteQuote(id)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const updateContent = async (req, res) => {
  const id = req.params.id
  const { content } = req.body
  await quotesService.updateContentQuote({ id, content })
  res.status(StatusCodes.OK).json({ messages: [] });
}

module.exports = {
  create,
  getPage,
  remove,
  updateContent,
}
