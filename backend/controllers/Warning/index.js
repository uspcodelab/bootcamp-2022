
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const warningsService = require('../../services/warnings/warningsService')(req)

  const create = async () => {
    const createObject = {
      title: req.body.title,
      icon: req.body.icon,
      content: req.body.content,
      class_id: req.body.class_id
    }
    await warningsService.createWarning(createObject) 
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      title: req.body.title,
      icon: req.body.icon,
      content: req.body.content,
      class_id: req.body.class_id
    }
    await warningsService.updateWarning(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const remove = async () => {
    const removeId = req.params.id
    await warningsService.deleteWarning(removeId)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const getAll = async () => {
    const {data, meta} = await warningsService.getAllWarnings()
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
