
const validateQuote = (messages, quote) => {
  if (!quote){
    messages.push('Please provide machine property');
  }
  if(!(typeof quote === 'string')) {
    messages.push('Quote property must be a string');
  }
  else if(quote.length > 255){
    messages.push('Quote cannot be longer than 255 characters')
  }
}

const validateAuthor = (messages, author) => {
  if (!author){
    messages.push('Please provide author property');
  }
  if(!(typeof author === 'string')) {
    messages.push('Author property must be a string');
  }
  else if(author.length > 255){
    messages.push('Author cannot be longer than 255 characters')
  }
}

const validateCreate = (quote) => {
  let messages = [];

  if (!quote) {
    throw new CustomError.BadRequestError('Quote not provided')
  }

  validateQuote(messages, quote.quote)
  validateAuthor(messages, quote.author)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages.join());
  }
}

module.exports = {
  validateQuote,
  validateAuthor,
  validateCreate,
}
