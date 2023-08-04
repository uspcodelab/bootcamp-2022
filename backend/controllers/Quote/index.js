
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const quotesService = require('../../services/quotes/quotesService')(req)

  const create = async () => {
    const createObject = {
      author_id: req.user.id,
      content: req.body.content
    }
    await quotesService.createQuote(createObject)
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      content: req.body.content
    }
    await quotesService.updateContentQuote(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const getPage = async () => {
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

  const remove = async () => {
    const id = req.params.id
    await quotesService.deleteQuote(id)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  return {
    create,
    getPage,
    remove,
    update
  }
}

module.exports = {
  async create (req, res) {
    await controllers(req, res).create()
  },
  async getPage (req, res) {
    await controllers(req, res).getPage()
  },
  async remove (req, res) {
    await controllers(req, res).remove()
  },
  async update (req, res) {
    await controllers(req, res).update()
  }
}
