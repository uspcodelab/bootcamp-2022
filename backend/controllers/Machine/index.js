
const { StatusCodes } = require('http-status-codes')
const machinesService = require('../../services/machines/machinesService');

const create = async (req, res) => {
  await machinesService.createMachine(req.body)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const getPage = async (req, res) => {
  const { data, meta } = await machinesService.getMultipleMachines(req.query.page)
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

const update = async (req, res) => {
  const updatedMachine = {
    id: req.params.id,
    status: req.body.status,
    name: req.body.name
  }
  await machinesService.updateMachine(updatedMachine)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const remove = async (req, res) => {
  await machinesService.deleteMachine(req.params.id)
  res.status(StatusCodes.OK).json({ messages: [] });
}

module.exports = {
  create,
  getPage,
  remove,
  update
}
