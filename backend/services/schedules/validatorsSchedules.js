
module.exports = (req) => {

  // errors
  const errors = require('../../errors/error_messages')(req).schedule
  const CustomError = require('../../errors/custom_errors')

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
    else if(typeof start_time !== 'string'){
      messages.push(errors.start_time.str)
    }
    else if(!validate24hTime(start_time)){
      messages.push(errors.start_time.vld)
    }
  }

  const validateEndTime = (messages, end_time) => {
    if(!end_time){
      messages.push(errors.end_time.undef)
    }
    else if(typeof end_time !== 'string'){
      messages.push(errors.start_time.str)
    }
    else if(!validate24hTime(end_time)){
      messages.push(errors.end_time.vld)
    }
  }

  const validateAdminId = (messages, admin_id) => {
    if(!admin_id) {
      messages.push(errors.admin_id.undef)
    }
  }

  const validateSchedule = (schedule) => {
    const messages = []
    if(!schedule){
      throw new CustomError.BadRequestError(errors.sc)
    }
    validateWeekday(messages, schedule.weekday)
    validateStartTime(messages, schedule.start_time)
    validateEndTime(messages, schedule.end_time)
    validateAdminId(messages, schedule.admin_id)
    if(messages.length > 0) {
      throw new CustomError.BadRequestError(messages);
    }
  }

  return validateSchedule 
}
