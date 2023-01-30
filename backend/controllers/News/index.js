
const { StatusCodes } = require('http-status-codes')
const newsService = require('../../services/news/newsService')

const getPage = async (req, res) => {
  const {data, meta} = await newsService.getMultipleNews(req.query.page)
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    }
  })
}

const getNews = async (req, res) => {
  const id = req.params.id
  const news = await newsService.getNews(id)
  res.status(StatusCodes.OK).json({ 
    messages: [],
    data: news,
  })
}

const create = async (req, res) => {
  req.body.author_id = req.user.id
  await newsService.createNews(req.body) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const remove = async (req, res) => {
  const id = req.params.id
  await newsService.deleteNews(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const update = async (req, res) => {
  const updatedNews = {
    id: req.params.id,
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
  }
  await newsService.updateNews(updatedNews)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  getNews,
  create,
  remove,
  update
}
