
const { StatusCodes } = require('http-status-codes')
const slidesService = require('../../services/slides/slidesService')

const getPage = async (req, res) => {
  const {data, meta} = await slidesService.getMultipleSlides(req.query.page)
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
  await slidesService.createSlide(req.body) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const remove = async (req, res) => {
  const id = req.params.id
  await slidesService.deleteSlide(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const update = async (req, res) => {
  const updatedSlide = {
    id: req.params.id,
    small_intro: req.body.small_intro,
    main_text: req.body.main_text
  }
  await slidesService.updateSlide(updatedSlide)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  create,
  remove,
  update
}
