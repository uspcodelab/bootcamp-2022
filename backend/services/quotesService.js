const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const CustomError = require('../errors')

const getMultiple = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, quote, author FROM QUOTE OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  console.log(rows)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const validateCreate = (quote) => {
  let messages = [];
  // console.log(quote);
  if (!quote) {
    messages.push('No object is provided');
  }
  if (!quote.quote) {
    messages.push('Quote is empty');
  }
  if (!quote.author) {
    messages.push('Author is empty');
  }
  if (quote.quote && quote.quote.length > 255) {
    messages.push('Quote cannot be longer than 255 characters');
  }
  if (quote.author && quote.author.length > 255) {
    messages.push('Author name cannot be longer than 255 characters');
  }
  if (messages.length) {
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

module.exports = {
  getMultiple,
  create
}
