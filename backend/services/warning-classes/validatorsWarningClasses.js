
// const { validateColor: isColor } = require('validate-color')
const CustomError = require('../../errors')

const validateTitle = (messages, title) => {
  if(!title){
    messages.push(errors.warningClasses.title.undef)
  }
  else if(typeof title !== 'string'){
    messages.push(errors.warningClasses.title.str)
  }
  else if(title.length > 255){
    messages.push(errors.warningClasses.title.len)
  }
}

const validateColor = (messages, color) => {
  if(!color){
    messages.push(errors.warningClasses.color.undef)
  }
//  else if(!isColor(warningClass.color)){
//    messages.push(errors.warningClasses.color.vld)
//  }
}

const validateWarningClass = (warningClass) => {
  const messages = []
  if(!warningClass){
    throw new CustomError.BadRequestError('Please provide warningClass body')
  }

  validateTitle(messages, warningClass.title)
  validateColor(messages, warningClass.color)

  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages.join());
  }
}

module.exports = validateWarningClass 

