
// errors 
const Handler = require('../../errors/error_handlers')

// validators
const { validateNewsCreate, validateNewsUpdate  }= require('./validatorsNews')

// helpers
const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectOneHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

// db
const tableName = 'NEWS'

const createNews = async (createObject) => {
  validateNewsCreate(createObject)
  try {
    await insertHelper(createObject, tableName)
  }
  catch(error){
    throw Handler.externalIdError(error, createObject.author_id, 'USERS')
  }
}

const updateNews = async (updateObject) => {
  validateNewsUpdate(updateObject)
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

const deleteNews = async (newsId) => {
  try {
    const [result] = await deleteHelper({ id: newsId }, tableName)
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

const getNews = async (newsId) => {
  const importantInfo = ['title', 'subtitle', 'content', 'author_id', 'id']
  try {
    const [ newsInfo ] = await selectOneHelper(importantInfo, { id: newsId }, tableName)
    return newsInfo 
  }
  catch(error) {
    throw Handler.idError(error, newsId)
  }
}

const getMultipleNews = async (page = 1) => {
  // it wont send the content
  try{
    const data = await selectPageHelper(['title', 'subtitle', 'author_id', 'id'], page, tableName)
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

module.exports = {
  createNews,
  deleteNews,
  getMultipleNews,
  getNews,
  updateNews
}
