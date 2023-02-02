
const { StatusCodes } = require('http-status-codes')
const machinesService = require('../../services/machines/machinesService');

const create = async (req, res) => {
  const createObject ={
    name: req.body.name,
    status: req.body.status
  }
  await machinesService.createMachine(createObject)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    status: req.body.status,
    name: req.body.name
  }
  await machinesService.updateMachine(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const remove = async (req, res) => {
  const removeId = req.params.id
  await machinesService.deleteMachine(removeId)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const getAll = async (req, res) => {
  const { data, meta } = await machinesService.getAllMachines()
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
