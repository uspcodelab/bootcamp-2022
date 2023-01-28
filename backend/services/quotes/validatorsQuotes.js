
const errors = require('../../errors/error-messages.json')
const CustomError = require('../../errors')

const validateContent = (messages, content) => {
  if (!content){
    messages.push(errors.quotes.content.undef);
  }
  else if(typeof content !== 'string') {
    messages.push(errors.quotes.content.str);
  }
  else if(content.length > 255){
    messages.push(errors.quotes.content.len)
  }
}

const validateAuthor = (messages, author) => {
  if (!author){
    messages.push(errors.quotes.author.undef);
  }
  else if(!(typeof author === 'string')) {
    messages.push(errors.quotes.author.str);
  }
  else if(author.length > 255){
    messages.push(errors.quotes.len.str)
  }
}

const validateQuote = (quote) => {
  const messages = [];

  if (!quote) {
    throw new CustomError.BadRequestError(errors.quotes.qt)
  }

  validateContent(messages, quote.content)
  validateAuthor(messages, quote.author)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages.join());
  }
}

const validateUpdateContentQuote = (quote) => {
  const messages = []
  
  if (!quote) {
    throw new CustomError.BadRequestError(errors.quotes.qt)
  }

  validateContent(messages, quote.content)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages.join());
  }

}

module.exports = {
  validateQuote,
  validateUpdateContentQuote
}
