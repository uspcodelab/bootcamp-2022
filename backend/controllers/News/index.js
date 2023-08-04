
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const newsService = require('../../services/news/newsService')(req)

  const create = async () => {
    const createObject = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      content: req.body.content,
      author_id: req.user.id
    }
    await newsService.createNews(createObject) 
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      title: req.body.title,
      subtitle: req.body.subtitle,
      content: req.body.content,
    }
    await newsService.updateNews(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const remove = async () => {
    const removeId = req.params.id
    await newsService.deleteNews(removeId)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const getNews = async () => {
    const id = req.params.id
    const news = await newsService.getNews(id)
    res.status(StatusCodes.OK).json({ 
      messages: [],
      data: news,
    })
  }

  const getPage = async () => {
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

  return {
    getPage,
    getNews,
    create,
    remove,
    update
  }
}

module.exports = {
  async getPage (req, res) {
    await controllers(req, res).getPage()
  },
  async getNews (req, res) {
    await controllers(req, res).getNews()
  },
  async create (req, res) {
    await controllers(req, res).create()
  },
  async remove (req, res) {
    await controllers(req, res).remove()
  },
  async update (req, res) {
    await controllers(req, res).update()
  }
}
