
const { StatusCodes } = require('http-status-codes')
const slideButtonsService = require('../../services/slide-buttons/slideButtonsService')

const getPage = async (req, res) => {
  const {data, meta} = await slideButtonsService.getMultipleSlideButtons(req.query.page)
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    }
  })
}

const create = async (req, res) => {
  await slideButtonsService.createSlideButton(req.body) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const remove = async (req, res) => {
  const id = req.params.id
  await slideButtonsService.deleteSlideButton(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const update = async (req, res) => {
  const updateSlideButton = {
    id: req.params.id,
    title: req.body.title,
    color: req.body.color,
    link: req.body.link,
    slide_id: req.body.slide_id
  }
  await slideButtonsService.updateSlideButton(updatedSlideButton)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  create,
  remove,
  update
}
