
const { StatusCodes } = require('http-status-codes')
const newsService = require('../../services/news/newsService')

const create = async (req, res) => {
  const createObject = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    author_id: req.user.id
  }
  await newsService.createNews(createObject) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
  }
  await newsService.updateNews(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const remove = async (req, res) => {
  const removeId = req.params.id
  await newsService.deleteNews(removeId)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const getNews = async (req, res) => {
  const id = req.params.id
  const news = await newsService.getNews(id)
  res.status(StatusCodes.OK).json({ 
    messages: [],
    data: news,
  })
}

const getPage = async (req, res) => {
  const page = req.query.page
  const {data, meta} = await newsService.getMultipleNews(page)
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    }
  })
}

module.exports = {
  getPage,
  getNews,
  create,
  remove,
  update
}
