
const { StatusCodes } = require('http-status-codes')
const warningsService = require('../../services/warnings/warningsService')

const getPage = async (req, res) => {
  const {data, meta} = await warningsService.getMultipleWarnings(req.query.page)
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
  await warningsService.createWarning(req.body) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const remove = async (req, res) => {
  const id = req.params.id
  await warningsService.deleteWarning(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const update = async (req, res) => {
  const updatedWarning = {
    id: req.params.id,
    title: req.body.title,
    icon: req.body.icon,
    content: req.body.content,
    class_id: req.body.class_id
  }
  await warningsService.updateWarning(updatedWarning)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  create,
  remove,
  update
}
