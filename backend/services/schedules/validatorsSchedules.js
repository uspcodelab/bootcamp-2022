
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages').schedule

const validateWeekday = (messages, weekday ) => {
  if(!weekday) {
    messages.push(errors.weekday.undef)
  }
  else if(!errors.weekday.days.includes(weekday)) {
    messages.push(errors.weekday.vld)
  }
}

const validate24hTime = (time) => {
  return /^(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?$/.test(time)
}

const validateStartTime = (messages, start_time) => {
  if(!start_time){
    messages.push(errors.start_time.undef)
  }
  if(!validate24hTime(start_time)){
    messages.push(errors.start_time.vld)
  }
}

const validateEndTime = (messages, end_time) => {
  if(!end_time){
    messages.push(errors.end_time.undef)
  }
  if(!validate24hTime(end_time)){
    messages.push(errors.end_time.vld)
  }
}

const validateAdminName = (messages, admin_id) => {
  if(!admin_id) {
    messages.push(errors.admin_id.undef)
  }
}

const validateSchedule = (schedule) => {
  const messages = []
  if(!schedule){
    throw new CustomError.BadRequestError(errors.sc)
  }
  validateWeekday(messages, schedule.title)
  validateStartTime(messages, schedule.icon)
  validateEndTime(messages, schedule.content)
  validateAdminName(messages, schedule.admin_name)
  if(messages.length > 0) {
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateSchedule 

