
const { StatusCodes } = require('http-status-codes')
const slideButtonsService = require('../../services/slide-buttons/slideButtonsService')

const create = async (req, res) => {
  const createObject = {
    title: req.body.title,
    link: req.body.link,
    color: req.body.color,
    slide_id: req.body.slide_id
  }
  await slideButtonsService.createSlideButton(createObject) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
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

const remove = async (req, res) => {
  const id = req.params.id
  await slideButtonsService.deleteSlideButton(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const getAll = async (req, res) => {
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

module.exports = {
  getAll,
  create,
  remove,
  update
}
