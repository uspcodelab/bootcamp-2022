
module.exports = (req) => {

  // validators
  const {
    validateQuote,
    validateUpdateContentQuote
  } = require('./validatorsQuotes')(req)

  // errors
  const Handler = require('../../errors/error_handlers')(req)

  // helpers
  const { 
    insertHelper,
    updateHelper,
    deleteHelper,
    selectTwoTablesJoinPageHelper
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
      const [result] = await updateHelper(updateObject, tableName)
      if(!result){
        const err = new Error()
        err.code = '22P02'
        throw err
      }
    }
    catch(error) {
      throw Handler.idError(error, updateObject.id)
    }
  }

  const deleteQuote = async (quoteId) => {
    try{
      const [result] = await deleteHelper({ id: quoteId }, tableName)
      if(!result) {
        const err = new Error()
        err.code = '22P02'
        throw err
      }
    }
    catch(error){
      throw Handler.idError(error, quoteId)
    }
  }

  const getMultipleQuotes = async (page = 1) => {
    try {
      const selectArray = ['QUOTES.id', 'content', 'updated_at', 'created_at', 'username', 'name', 'role']
      const idArray = ['QUOTES.author_id', 'USERS.id']
      const data = await selectTwoTablesJoinPageHelper(selectArray, idArray, page, [tableName, 'USERS'])
      const meta = {size: data.length}
      return {
        data,
        meta
      }
    }
    catch(error) {
      throw Handler.pageError(error, page)
    }
  }

  return {
    getMultipleQuotes,
    createQuote,
    deleteQuote,
    updateContentQuote
  }
}
