
// errors
const Handler = require('../../errors/error_handlers')

// validators
const {
  validateQuote,
  validateUpdateContentQuote
} = require('./validatorsQuotes')

// helper
const { 
  insertHelper,
  updateHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

// db
const tableName = 'QUOTES'

const createQuote = async (createObject) => {
  validateQuote(createObject);
  try{
    await insertHelper(createObject, tableName)
  }
  catch(error){
    throw Handler.externalIdError(error, createObject.author_id, 'USERS')
  }
}

const updateContentQuote = async (updateObject) => {
  validateUpdateContentQuote(updateObject)
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

const getMultipleQuotes = async (page = 1) => {
  try {
    const selectArray = ['id', 'content', 'author', 'updated_at', 'created_at']
    const data = await selectPageHelper(selectArray, page, tableName)
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

module.exports = {
  getMultipleQuotes,
  createQuote,
  deleteQuote,
  updateContentQuote
}
