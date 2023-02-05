
module.exports = (req) => {

  // validators 
  const validateWarning = require('./validatorsWarnings')(req)

  // errors
  const Handler = require('../../errors/error_handlers')(req)

  // helpers 
  const { 
    updateHelper,
    insertHelper,
    deleteHelper,
    selectTwoTablesJoinAllHelper
  } = require('../../utils/queryHelper')

  // db
  const tableName = 'WARNINGS'

  const createWarning = async (createObject) => {
    validateWarning(createObject)
    try{
      await insertHelper(createObject, tableName)
    }
    catch(error){
      throw Handler.externalIdError(error, createObject.class_id, 'WARNING_CLASSES')
    }
  }

  const updateWarning = async (updateObject) => {
    validateWarning(updateObject)
    try{
      const [result] = await updateHelper(updateObject, tableName)
      if(!result){
        const err = new Error()
        err.code = '22P02'
        throw err
      }
    }
    catch(error){
      error = Handler.idError(error, updateObject.id)
      if(!error.statusCode){
        error = Handler.externalIdError(error, updateObject.class_id, 'WARNING_CLASSES')
      }
      throw error
    }
  }

  const deleteWarning = async (warning) => {
    try{
      const [result] = await deleteHelper({ id: warning }, tableName)
      if(!result){
        const err = new Error()
        err.code = '22P02'
        throw err
      }
    }
    catch(error){
      throw Handler.idError(error, warning)
    }
  }

  const getAllWarnings = async () => {
    const selectArray = ['icon', 'content', 'class_id', 'WARNINGS.id', 'WARNINGS.title', 'color']
    const idArray = ['WARNINGS.class_id', 'WARNING_CLASSES.id']
    const data = await selectTwoTablesJoinAllHelper(selectArray, idArray, [tableName, 'WARNING_CLASSES'])
    const meta = {size: data.length};
    return {
      data,
      meta
    }
  }

  return {
    createWarning,
    deleteWarning,
    getAllWarnings,
    updateWarning
  }
}
