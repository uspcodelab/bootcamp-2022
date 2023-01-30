
// const { validateColor: isColor } = require('validate-color')
const CustomError = require('../../errors')
const errors = require('../../errors/error-messages.json').warnings
const { checkExistanceHelper } = require('../../utils/queryHelper')

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

const validateIcon = (messages, icon) => {
  if(!icon){
    messages.push(errors.icon.undef)
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

const validateClassId = async (messages, class_id) => {
  if(!class_id) {
    messages.push(errors.class_id.undef)
  }
  else  {
    const result = await checkExistanceHelper({ id: class_id }, 'WARNING_CLASSES')
    if(result.length === 0){
      messages.push(errors.class_id.notExt)
    }
  }
}

const validateWarning = async (warning) => {
  const messages = []
  if(!warning){
    throw new CustomError.BadRequestError(errors.wr)
  }
  validateTitle(messages, warning.title)
  validateIcon(messages, warning.icon)
  validateContent(messages, warning.content)
  await validateClassId(messages, warning.class_id)

  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateWarning

