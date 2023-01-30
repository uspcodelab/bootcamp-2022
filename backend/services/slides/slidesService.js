
const helper = require('../../utils/pageHelper');
const CustomError = require('../../errors')
const validateSlide = require('./validatorsSlide')
const Handler = require('../../errors/error-handlers')

const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'SLIDES'

const createSlide = async (slide) => {
  validateSlide(slide)
  const insertObject = {
    small_intro: slide.small_intro,
    main_text: slide.main_text
  }
  await insertHelper(insertObject, tableName)
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

const getMultipleSlides = async (page = 1) => {
  try{
    const rows = await selectPageHelper(['small_intro', 'main_text', 'id'], page, tableName)
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

const updateSlide = async (slide) => {
  validateSlide(slide)
  try {
    const updateObject = {
      small_intro: slide.small_intro,
      main_text: slide.main_text
    }
    const [result] = await updateHelper(updateObject, slide.id, tableName)
    if(!result){
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, slide.id)
  }
}

module.exports = {
  createSlide,
  deleteSlide,
  getMultipleSlides,
  updateSlide
}
