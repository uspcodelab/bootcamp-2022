
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const slideButtonsService = require('../../services/slide-buttons/slideButtonsService')(req)

  const create = async () => {
    const createObject = {
      title: req.body.title,
      link: req.body.link,
      color: req.body.color,
      slide_id: req.body.slide_id
    }
    await slideButtonsService.createSlideButton(createObject) 
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      title: req.body.title,
      color: req.body.color,
      link: req.body.link,
      slide_id: req.body.slide_id
    }
    await slideButtonsService.updateSlideButton(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const remove = async () => {
    const id = req.params.id
    await slideButtonsService.deleteSlideButton(id)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const getAll = async () => {
    const {data, meta} = await slideButtonsService.getAllSlideButtons()
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
    getAll,
    create,
    remove,
    update
  }
}


module.exports = {
  async create (req, res) {
    await controllers(req, res).create()
  },
  async getAll (req, res) {
    await controllers(req, res).getAll()
  },
  async remove (req, res) {
    await controllers(req, res).remove()
  },
  async update (req, res) {
    await controllers(req, res).update()
  }
}
