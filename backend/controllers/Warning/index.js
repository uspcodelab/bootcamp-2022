
const { StatusCodes } = require('http-status-codes')
const warningsService = require('../../services/warnings/warningsService')

const create = async (req, res) => {
  const createObject = {
    title: req.body.title,
    icon: req.body.icon,
    content: req.body.content,
    class_id: req.body.class_id
  }
  await warningsService.createWarning(createObject) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
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

const remove = async (req, res) => {
  const removeId = req.params.id
  await warningsService.deleteWarning(removeId)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const getAll = async (req, res) => {
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

module.exports = {
  getAll,
  create,
  remove,
  update
}
