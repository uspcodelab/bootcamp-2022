
// validator
const validateWarningClass = require('./validatorsWarningClasses')

// helper
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectAllHelper
} = require('../../utils/queryHelper')

// db
const tableName = 'WARNING_CLASSES'

const createWarningClass = async (createObject) => {
  validateWarningClass(createObject)
  await insertHelper(createObject, tableName)
}

const updateWarningClass = async (updateObject) => {
  validateWarningClass(updateObject)
  try{
    const [result] = await updateHelper(updateObject, tableName)
    if(!result){
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, updateObject.id)
  }
}

const deleteWarningClass = async (warningClassId) => {
  try{
    const result = await deleteHelper({ id: warningClassId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, warningClassId)
  }
}

const getAllWarningClasses = async () => {
  try{
    const data = await selectAllHelper(['title', 'color', 'id'], tableName)
    const meta = {size: data.length}
    return {
      data,
      meta
    }
  }
  catch(error){
    throw Handler.pageError(error, page)
  }
}

module.exports = {
  createWarningClass,
  deleteWarningClass,
  getAllWarningClasses,
  updateWarningClass 
}
