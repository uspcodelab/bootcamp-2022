const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const CustomError = require('../errors')

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
    messages.push('No object has been provided');
  }

  validateQuote(messages, quote.quote)
  validateAuthor(messages, quote.author)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages.join());
  }
}

const create = async (quote) => {
  validateCreate(quote);
  const result = await db.query(
    'INSERT INTO QUOTE (quote, author) VALUES ($1, $2) RETURNING *',
    [quote.quote, quote.author]
  )
  if(result.length < 1){
    throw new CustomError.InternalServerError('Error when submitting quote to db')
  }
}

const getMultiple = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, quote, author FROM QUOTE OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple,
  create
}
