
// errors
const validateSlide = require('./validatorsSlide')
const Handler = require('../../errors/error_handlers')

// helpers
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectAllHelper
} = require('../../utils/queryHelper')

// db
const tableName = 'SLIDES'

const createSlide = async (createObject) => {
  validateSlide(createObject)
  await insertHelper(createObject, tableName)
}

const updateSlide = async (updateObject) => {
  validateSlide(updateObject)
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

const deleteSlide = async (slideId) => {
  try{
    const [result] = await deleteHelper({ id: slideId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error) {
    throw Handler.idError(error, slideId)
  }
}

const getAllSlides = async () => {
  const selectArray = ['small_intro', 'main_text', 'id']
  const data = await selectAllHelper(selectArray, tableName)
  const meta = {size: data.length};
  return {
    data,
    meta
  }
}

module.exports = {
  createSlide,
  deleteSlide,
  getAllSlides,
  updateSlide
}
