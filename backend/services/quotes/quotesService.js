const db = require('../db');
const helper = require('../../helper');
const config = require('../../config');
const CustomError = require('../../errors')

const {
  validateQuote,
  validateAuthor,
  validateCreate,
} = require('./validatorsQuotes')

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
