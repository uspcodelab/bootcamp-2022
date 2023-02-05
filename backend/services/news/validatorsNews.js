
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages')().news

const validateTitle = (messages, title) => {
  if(!title){
    messages.push(errors.title.undef)
  }
  else if(typeof title !== 'string'){
    messages.push(errors.title.str)
  }
  else if(title.length > 128){
    messages.push(errors.title.len)
  }
}

const validateSubtitle = (messages, subtitle) => {
  if(!subtitle){
    messages.push(errors.subtitle.undef)
  }
  else if(typeof subtitle !== 'string'){
    messages.push(errors.subtitle.str)
  }
  else if(subtitle.length > 128){
    messages.push(errors.subtitle.len)
  }
}

const validateContent = (messages, content) => {
  if(!content){
    messages.push(errors.content.undef)
  }
  else if(typeof content !== 'string'){
    messages.push(errors.content.str)
  }
}

const validateAuthorId = (messages, author_id) => {
  if(!author_id) {
    messages.push(errors.author_id.undef)
  }
}

const validateNewsCreate = (news) => {
  const messages = []
  if(!news){
    throw new CustomError.BadRequestError(errors.nw)
  }
  validateTitle(messages, news.title)
  validateSubtitle(messages, news.subtitle)
  validateContent(messages, news.content)
  validateAuthorId(messages, news.author_id)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

const validateNewsUpdate = (news) => {
  const messages = []
  if(!news){
    throw new CustomError.BadRequestError(errors.nw)
  }
  validateTitle(messages, news.title)
  validateSubtitle(messages, news.subtitle)
  validateContent(messages, news.content)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = {
  validateNewsCreate,
  validateNewsUpdate
}

