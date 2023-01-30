

const helper = require('../../utils/pageHelper');
const CustomError = require('../../errors')
const validateSchedule = require('./validatorsSchedules')

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'SCHEDULES'

const createSchedule = async (schedule) => {
  await validateSchedule(schedule)
  const insertObject = {
    weekday: schedule.weekday,
    start_time: schedule.start_time,
    end_time: schedule.end_time,
    admin_id: schedule.admin_id
  }
  const result = await insertHelper(insertObject, tableName)
  if(result.length == 0) {
    throw new CustomError.InternalServerError('Error when submitting schedule to db')
  }
}

const deleteSchedule = async (scheduleId) => {
  const result = await deleteHelper({ id: scheduleId }, tableName)
  if(result.length == 0) {
    throw new CustomError.NotFoundError(`Not found schedule with id ${scheduleId}`)
  }
}

const getMultipleSchedules = async (page = 1) => {
  const rows = await selectPageHelper(
    ['weekday', 'start_time', 'end_time', 'admin_id'],
    page, tableName)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const updateSchedule = async (scheduleBody) => {
  await validateSchedule(scheduleBody)
  const updateObject = {
    weekday: scheduleBody.weekday,
    start_time: scheduleBody.start_time,
    end_time: scheduleBody.end_time,
    admin_id: scheduleBody.admin_id
  }
  const result = await updateHelper(updateObject, scheduleBody.id, tableName)
  if(result.length === 0) {
    throw new CustomError.NotFoundError(`There is no schedule with id ${scheduleBody.id}`)
  }
}

module.exports = {
  createSchedule,
  deleteSchedule,
  getMultipleSchedules,
  updateSchedule
}
