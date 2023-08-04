
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const machinesService = require('../../services/machines/machinesService')(req)

  const create = async () => {
    const createObject ={
      name: req.body.name,
      status: req.body.status
    }
    await machinesService.createMachine(createObject)
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      status: req.body.status,
      name: req.body.name
    }
    await machinesService.updateMachine(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const remove = async () => {
    const removeId = req.params.id
    await machinesService.deleteMachine(removeId)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const getAll = async () => {
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
