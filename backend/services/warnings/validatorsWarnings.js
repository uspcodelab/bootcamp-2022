
module.exports = (req) => {

  // errors
  const errors = require('../../errors/error_messages')(req).warnings
  const CustomError = require('../../errors/custom_errors')

  const validateTitle = (messages, title) => {
    if(!title){
      messages.push(errors.title.undef)
    }
    else if(typeof title !== 'string'){
      messages.push(errors.title.str)
    }
    else if(title.length > 64){
      messages.push(errors.title.len)
    }
  }

  const validateIcon = (messages, icon) => {
    if(!icon){
      messages.push(errors.icon.undef)
    }
    else if(typeof icon!== 'string'){
      messages.push(errors.icon.str)
    }
    else if(icon.length > 64){
      messages.push(errors.icon.len)
    }
  }

  const validateContent = (messages, content) => {
    if(!content) {
      messages.push(errors.content.undef)
    }
    else if(typeof content !== 'string'){
      messages.push(errors.content.str)
    }
  }

  const validateClassId = (messages, class_id) => {
    if(!class_id) {
      messages.push(errors.class_id.undef)
    }
  }

  const validateWarning = (warning) => {
    const messages = []
    if(!warning){
      throw new CustomError.BadRequestError(errors.wr)
    }
    validateTitle(messages, warning.title)
    validateIcon(messages, warning.icon)
    validateContent(messages, warning.content)
    validateClassId(messages, warning.class_id)
    if(messages.length > 0){
      throw new CustomError.BadRequestError(messages);
    }
  }

  return validateWarning
}
