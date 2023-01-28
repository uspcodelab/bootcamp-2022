const db = require('../db');
const helper = require('../../utils/pageHelper');
const config = require('../../config');
const CustomError = require('../../errors')

const {
  validateQuote,
  validateUpdateContentQuote
} = require('./validatorsQuotes')

const { 
  insertHelper,
  updateHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'QUOTES'

const createQuote = async (quote) => {
  // checar se existe content igual
  validateQuote(quote);
  const insertObject = {
    content: quote.content,
    author: quote.author
  }
  const result = await insertHelper(insertObject, tableName)
  if(result.length < 1){
    throw new CustomError.InternalServerError('Error when submitting quote to db')
  }
}

const getMultipleQuotes = async (page = 1) => {
  const selectArray = ['id', 'content', 'author', 'updated_at', 'created_at']
  const rows = await selectPageHelper(selectArray, page, tableName)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const deleteQuote = async (quoteId) => {
  const result = deleteHelper({ id: quoteId }, tableName)
  if(result.length === 0) {
    throw new CustomError.NotFoundError(`There is no quote with id ${quoteId}`)
  }
}

const updateContentQuote = async (quoteBody) => {
  validateUpdateContentQuote(quoteBody)
  const queryObject = {
    content: quoteBody.content,
  }
  const result = await updateHelper(queryObject, quoteBody.id, tableName)
  if(result.length === 0) {
    throw new CustomError.NotFoundError(`There is no quote with id ${quoteBody.id}`)
  }
}

module.exports = {
  getMultipleQuotes,
  createQuote,
  deleteQuote,
  updateContentQuote
}
