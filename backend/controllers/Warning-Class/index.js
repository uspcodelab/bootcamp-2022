
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const warningClassesService = require('../../services/warning-classes/warningClassesService')(req)

  const create = async () => {
    const createObject = {
      title: req.body.title,
      color: req.body.color
    }
    await warningClassesService.createWarningClass(createObject)
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      title: req.body.title,
      color: req.body.color
    }
    await warningClassesService.updateWarningClass(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const remove = async () => {
    const removeId = req.params.id
    await warningClassesService.deleteWarningClass(removeId)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const getAll = async () => {
    const { data, meta } = await warningClassesService.getAllWarningClasses()
    res.status(StatusCodes.OK).json({
      messages: [],
      data,
      meta: {
        ...meta,
        size: data.length
      },
    });
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
