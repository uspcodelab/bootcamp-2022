
// errors
const Handler = require('../../errors/error_handlers')

// validator
const validateSchedule = require('./validatorsSchedules')

// helpers
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectAllHelper,
} = require('../../utils/queryHelper')

// db
const tableName = 'SCHEDULES'

const createSchedule = async (createObject) => {
  validateSchedule(createObject)
  try{
    await insertHelper(createObject, tableName)
  }
  catch(error){
    throw Handler.externalIdError(error, createObject.admin_id, tableName)
  }
}

const updateSchedule = async (updateObject) => {
  validateSchedule(updateObject)
  try{
    const [result] = await updateHelper(updateObject, tableName)
    if(!result){
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    error = Handler.idError(error, updateObject.id)
    if(error.statusCode === undefined){
      error = Handler.alreadyExistsError(error, updateObject.admin_id, 'USERS')
    }
    throw error
  }
}

const deleteSchedule = async (scheduleId) => {
  try{
    const [result] = await deleteHelper({ id: scheduleId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, newsId)
  }
}

const getAllSchedules = async () => {
  const selectArray = ['weekday', 'start_time', 'end_time', 'admin_name']
  const data = await selectAllHelper(selectArray, tableName)
  const meta = {size: data.length};
  return {
    data,
    meta
  }
}

module.exports = {
  createSchedule,
  deleteSchedule,
  getAllSchedules,
  updateSchedule
}
