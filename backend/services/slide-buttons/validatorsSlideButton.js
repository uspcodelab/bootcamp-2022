
const { checkExistanceHelper } = require('../../utils/queryHelper')
const CustomError = require('../../errors')
const errors = require('../../errors/error-messages.json').slideButtons

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

const validateLink = (messages, link) => {
  if(!link) {
    messages.push(errors.link.undef)
  }
  else if(typeof link !== 'string'){
    messages.push(errors.link.str)
  }
//  else if(!validator.isURL(link)){
//    messages.push(errors.link.vld)
//  }
}

const validateColor = (messages, color) => {
  if(!color){
    messages.push(errors.color.undef)
  }
}

const validateSlideId = (slide_id) => {
  if(!slide_id){
    messages.push(errors.slide_id.undef)
  }
}

const validateSlideButton = (slideButton) => {
  const messages = []
  if(!slideButton){
    throw new CustomError.BadRequestError(errors.sb)
  }
  validateTitle(messages, slideButton.title)
  validateColor(messages, slideButton.color)
  validateLink(messages, slideButton.link)
  validateSlideId(messages, slideButton.slide_id)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateSlideButton 

