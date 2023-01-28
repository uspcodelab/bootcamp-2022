
const { StatusCodes } = require('http-status-codes')
const warningClassesService = require('../../services/warning-classes/warningClassesService');

const create = async (req, res) => {
  await warningClassesService.createWarningClass(req.body)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const getPage = async (req, res) => {
  const { data, meta } = await warningClassesService.getMultipleWarningClasses(req.query.page) // default value === 1
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

const remove = async (req, res) => {
  const id = req.params.id
  await warningClassesService.deleteWarningClass(id)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const update = async (req, res) => {
  const id = req.params.id
  await warningClassesService.updateWarningClass({ id, ...req.body })
  res.status(StatusCodes.OK).json({ messages: [] });
}

module.exports = {
  create,
  getPage,
  remove,
  update 
}
