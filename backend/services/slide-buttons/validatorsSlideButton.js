
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages')().slideButtons

// validation helper
const { isHexColor, isURL } = require('validator')

const validateTitle = (messages, title) => {
  if(!title){
    messages.push(errors.title.undef)
  }
  else if(typeof title !== 'string'){
    messages.push(errors.title.str)
  }
  else if(title.length > 32){
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
  else if(link.length > 2048){
    messages.push(errors.link.len)
  }
  else if(!isURL(link, { requireHost: false })){
    messages.push(errors.link.vld)
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

const validateSlideId = (messages, slide_id) => {
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
  validateSlideId(messages,slideButton.slide_id)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateSlideButton 

