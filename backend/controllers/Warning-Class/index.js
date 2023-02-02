
const { StatusCodes } = require('http-status-codes')
const warningClassesService = require('../../services/warning-classes/warningClassesService');

const create = async (req, res) => {
  const createObject = {
    title: warningClass.title,
    color: warningClass.color
  }
  await warningClassesService.createWarningClass(createObject)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    title: warningClass.title,
    color: warningClass.color
  }
  await warningClassesService.updateWarningClass(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const remove = async (req, res) => {
  const removeId = req.params.id
  await warningClassesService.deleteWarningClass(removeId)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const getAll = async (req, res) => {
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

module.exports = {
  create,
  getAll,
  remove,
  update 
}
