
// errors
const Handler = require('../../errors/error_handlers')

// validator
const validateSlideButton = require('./validatorsSlideButton')

// helpers
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectAllHelper 
} = require('../../utils/queryHelper')

// db 
const tableName = 'SLIDE_BUTTONS'

const createSlideButton = async (createObject) => {
  validateSlideButton(createObject)
  try{
    await insertHelper(createObject, tableName)
  }
  catch(error){
    throw Handler.externalIdError(error, createObject.slide_id, 'SLIDES')
  }
}

const updateSlideButton = async (updateObject) => {
  validateSlideButton(updateObject)
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
      error = Handler.externalIdError(error, updateObject.slide_id, 'SLIDES')
    }
    throw error
  }
}

const deleteSlideButton = async (slideButtonId) => {
  try{
    const [result] = await deleteHelper({ id: slideButtonId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, slideButtonId)
  }
}

const getAllSlideButtons = async () => {
  try{
    const data = await selectAllHelper(['id', 'title', 'link', 'color', 'slide_id'], tableName)
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
  createSlideButton,
  deleteSlideButton,
  getAllSlideButtons,
  updateSlideButton
}
