
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const schedulesService = require('../../services/schedules/schedulesService')(req)

  const create = async () => {
    const createObject = {
      weekday: req.body.weekday,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      admin_id: req.body.admin_id
    }
    await schedulesService.createSchedule(createObject) 
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      weekday: req.body.weekday,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      admin_id: req.body.admin_id
    }
    await schedulesService.updateSchedule(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }


  const getAll = async () => {
    const {data, meta} = await schedulesService.getAllSchedules()
    res.status(StatusCodes.OK).json({
      messages: [],
      data,
      meta: {
        ...meta,
        size: data.length
      }
    })
  }

  const remove = async () => {
    const removeId = req.params.id
    await schedulesService.deleteSchedule(removeId)
    res.status(StatusCodes.OK).json({ messages: [] })
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
