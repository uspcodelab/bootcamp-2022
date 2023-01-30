
const helper = require('../../utils/pageHelper');
const CustomError = require('../../errors')
const validateSlideButton = require('./validatorsSlideButton')
const Handler = require('../../errors/error-handlers')

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectOneHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'SLIDE_BUTTONS'

const createSlideButton = async (slideButton) => {
  validateSlideButton(slideButton)
  const insertObject = {
    title: slideButton.title,
    link: slideButton.link,
    color: slideButton.color,
    slide_id: slideButton.slide_id
  }
  try{
    const result = await insertHelper(insertObject, tableName)
  }
  catch(error){
    throw Handler.externalIdError(error, slide_id, 'SLIDES')
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

const getMultipleSlideButtons = async (page = 1) => {
  try{
    const rows = await selectPageHelper(['title', 'link', 'color', 'slide_id'], page, tableName)
    const data = helper.emptyOrRows(rows);
    const meta = {page};
    return {
      data,
      meta
    }
  } 
  catch(error){
    throw Handler.pageError(error, page)
  }
}

const updateSlideButton = async (slideButton) => {
  validateSlideButton(slideButton)
  const updateObject = {
    title: slideButton.title,
    link: slideButton.link,
    color: slideButton.color,
    slide_id: slideButton.slide_id
  }
  const result = await updateHelper(updateObject, slideButton.id, tableName)
  if(result.length === 0) {
    throw new CustomError.NotFoundError(`There is no slide button with id ${slideButton.id}`)
  }
}

module.exports = {
  createSlideButton,
  deleteSlideButton,
  getMultipleSlideButtons,
  updateSlideButton
}
