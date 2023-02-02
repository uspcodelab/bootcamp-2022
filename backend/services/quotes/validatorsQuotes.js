
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages').quotes

const validateContent = (messages, content) => {
  if (!content){
    messages.push(errors.content.undef);
  }
  else if(typeof content !== 'string') {
    messages.push(errors.content.str);
  }
  else if(content.length > 255){
    messages.push(errors.content.len)
  }
}

const validateAuthorId = (messages, author_id) => {
  if (!author_id){
    messages.push(errors.author_id.undef);
  }
}

const validateQuote = (quote) => {
  const messages = [];

  if (!quote) {
    throw new CustomError.BadRequestError(errors.qt)
  }

  validateContent(messages, quote.content)
  validateAuthorId(messages, quote.author_id)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages);
  }
}

const validateUpdateContentQuote = (quote) => {
  const messages = []
  
  if (!quote) {
    throw new CustomError.BadRequestError(errors.qt)
  }

  validateContent(messages, quote.content)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages);
  }

}

module.exports = {
  validateQuote,
  validateUpdateContentQuote
}
