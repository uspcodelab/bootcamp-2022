
const { StatusCodes } = require('http-status-codes')
const slidesService = require('../../services/slides/slidesService')

const create = async (req, res) => {
  const createObject = {
    small_intro: req.body.small_intro,
    main_text: req.body.main_text
  }
  await slidesService.createSlide(createObject) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    small_intro: req.body.small_intro,
    main_text: req.body.main_text
  }
  await slidesService.updateSlide(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const remove = async (req, res) => {
  const removeId = req.params.id
  await slidesService.deleteSlide(removeId)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const getAll = async (req, res) => {
  const {data, meta} = await slidesService.getAllSlides()
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
