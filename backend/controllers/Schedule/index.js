
const { StatusCodes } = require('http-status-codes')
const schedulesService = require('../../services/schedules/schedulesService')

const getPage = async (req, res) => {
  const {data, meta} = await schedulesService.getMultipleSchedules(req.query.page)
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
  await schedulesService.createSchedule(req.body) 
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const remove = async (req, res) => {
  const id = req.params.id
  await schedulesService.deleteSchedule(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const update = async (req, res) => {
  const updatedSchedule = {
    id: req.params.id,
    weekday: req.body.weekday,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    admin_id: req.body.admin_id
  }
  await schedulesService.updateSchedule(updatedSchedule)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  create,
  remove,
  update
}
