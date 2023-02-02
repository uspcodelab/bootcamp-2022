
const { StatusCodes } = require('http-status-codes')
const quotesService = require('../../services/quotes/quotesService');

const create = async (req, res) => {
  const createObject = {
    author_id: req.user.id,
    content: req.body.content
  }
  await quotesService.createQuote(createObject)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    content: req.body.content
  }
  await quotesService.updateContentQuote(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] });
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

module.exports = {
  create,
  getPage,
  remove,
  update,
}
