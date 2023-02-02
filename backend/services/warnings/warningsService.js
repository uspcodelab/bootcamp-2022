
// errors
const validateWarning = require('./validatorsWarnings')

// helpers 
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectAllHelper
} = require('../../utils/queryHelper')

// db stuff
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
    throw Handler.idError(error, warningBody.id)
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
    throw Handler.idError(error, warningBody.id)
  }
}

const getAllWarnings = async () => {
  const selectArray = ['title', 'icon', 'content', 'class_id', 'id']
  const data = await selectAllHelper(selectArray, tableName)
  const meta = {size: data.length};
  return {
    data,
    meta
  }
}

module.exports = {
  createWarning,
  deleteWarning,
  getAllWarnings,
  updateWarning
}
