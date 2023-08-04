
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const slidesService = require('../../services/slides/slidesService')(req)

  const create = async () => {
    const createObject = {
      small_intro: req.body.small_intro,
      main_text: req.body.main_text
    }
    await slidesService.createSlide(createObject) 
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      small_intro: req.body.small_intro,
      main_text: req.body.main_text
    }
    await slidesService.updateSlide(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const remove = async () => {
    const removeId = req.params.id
    await slidesService.deleteSlide(removeId)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const getAll = async () => {
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

  return {
    create,
    getAll,
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
