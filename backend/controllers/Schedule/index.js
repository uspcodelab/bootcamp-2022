
const { StatusCodes } = require('http-status-codes')
const schedulesService = require('../../services/schedules/schedulesService')

const create = async (req, res) => {
  const createObject = {
    weekday: req.body.weekday,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    admin_id: req.body.admin_id
  }
  await schedulesService.createSchedule(createObject) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
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


const getAll = async (req, res) => {
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

const remove = async (req, res) => {
  const removeId = req.params.id
  await schedulesService.deleteSchedule(removeId)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getAll,
  create,
  remove,
  update
}
