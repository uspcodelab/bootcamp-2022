
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages').slides

const validateSmallIntro = (messages, small_intro) => {
  if(!small_intro){
    messages.push(errors.small_intro.undef)
  }
  else if(typeof small_intro !== 'string'){
    messages.push(errors.small_intro.str)
  }
  else if(small_intro.length > 64){
    messages.push(errors.small_intro.len)
  }
}

const validateMainText = (messages, main_text) => {
  if(!main_text){
    messages.push(errors.main_text.undef)
  }
  else if(typeof main_text !== 'string'){
    messages.push(errors.main_text.str)
  }
  else if(main_text.length > 128){
    messages.push(errors.main_text.len)
  }
}

const validateSlide = (slide) => {
  const messages = []
  if(!slide){
    throw new CustomError.BadRequestError(errors.sl)
  }
  validateSmallIntro(messages, slide.small_intro)
  validateMainText(messages, slide.main_text)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateSlide 

