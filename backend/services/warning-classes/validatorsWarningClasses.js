
module.exports = (req) => {

  // errors
  const errors = require('../../errors/error_messages')(req).warningClasses
  const CustomError = require('../../errors/custom_errors')

  // helpers
  const { isHexColor } = require('validator')

  const validateTitle = (messages, title) => {
    if(!title){
      messages.push(errors.title.undef)
    }
    else if(typeof title !== 'string'){
      messages.push(errors.title.str)
    }
    else if(title.length > 16){
      messages.push(errors.title.len)
    }
  }

  const validateColor = (messages, color) => {
    if(!color){
      messages.push(errors.color.undef)
    }
    else if(typeof color != 'string'){
      messages.push(errors.color.str)
    }
    else if(!isHexColor(color) || !color.startsWith('#')){
      messages.push(errors.color.vld)
    }
  }

  const validateWarningClass = (warningClass) => {
    const messages = []
    if(!warningClass){
      throw new CustomError.BadRequestError(errors.wc)
    }
    validateTitle(messages, warningClass.title)
    validateColor(messages, warningClass.color)
    if(messages.length > 0){
      throw new CustomError.BadRequestError(messages);
    }
  }

  return validateWarningClass 
}
