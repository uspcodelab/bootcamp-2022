const db = require('../db');
const helper = require('../../utils/pageHelper');
const config = require('../../config');
const CustomError = require('../../errors')
const Handler = require('../../errors/error-handlers')

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
  try {
    const result = await insertHelper(insertObject, tableName)
  }
  catch(error){
    throw new CustomError.InternalServerError('Something went wrong') 
  }
}

const getMultipleQuotes = async (page = 1) => {
  try {
    const selectArray = ['id', 'content', 'author', 'updated_at', 'created_at']
    const rows = await selectPageHelper(selectArray, page, tableName)
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
      data,
      meta
    }
  }
  catch(error) {
    throw Handler.pageError(error, page)
  }
}

const deleteQuote = async (quoteId) => {
  try{
    const [result] = deleteHelper({ id: quoteId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, newsId)
  }
}

const updateContentQuote = async (quoteBody) => {
  validateUpdateContentQuote(quoteBody)
  try{
    const queryObject = { content: quoteBody.content }
    const result = await updateHelper(queryObject, quoteBody.id, tableName)
    if(!result){
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error) {
    throw Handler.idError(error, news.id)
  }
}

module.exports = {
  getMultipleQuotes,
  createQuote,
  deleteQuote,
  updateContentQuote
}
