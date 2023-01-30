
// const { validateColor: isColor } = require('validate-color')
const CustomError = require('../../errors')
const errors = require('../../errors/error-messages.json').warningClass

const validateTitle = (messages, title) => {
  if(!title){
    messages.push(errors.title.undef)
  }
  else if(typeof title !== 'string'){
    messages.push(errors.title.str)
  }
  else if(title.length > 255){
    messages.push(errors.title.len)
  }
}

const validateColor = (messages, color) => {
  if(!color){
    messages.push(errors.color.undef)
  }
//  else if(!isColor(warningClass.color)){
//    messages.push(errors.color.vld)
//  }
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

module.exports = validateWarningClass 

