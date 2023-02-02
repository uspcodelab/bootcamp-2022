
// errors
const Handler = require('../../errors/error_handlers')

// validator
const validateFaq = require('./validatorsFaq')

// helper
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectAllHelper
} = require('../../utils/queryHelper')

// db
const tableName = 'FAQ'

const createFaq = async (createObject) => {
  validateFaq(createObject);
  await insertHelper(createObject, tableName)
}

const updateFaq = async (updateObject) => {
  validateFaq(updateObject)
  try {
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

const deleteFaq = async (deleteId) => {
  try{
    const [result] = await deleteHelper({ id: deleteId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, deleteId)
  }
}

const getAllFaqs = async () => {
  try{
   const selectArray = ['id', 'question', 'answer']
    const data = await selectAllHelper(selectArray, tableName)
    const meta = {size: data.length};
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
  getAllFaqs,
  createFaq,
  updateFaq,
  deleteFaq
}
