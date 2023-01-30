
const helper = require('../../utils/pageHelper');
const CustomError = require('../../errors')
const { validateNewsCreate, validateNewsUpdate  }= require('./validatorsNews')
const Handler = require('../../errors/error-handlers')

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectOneHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'NEWS'

const createNews = async (news) => {
  validateNewsCreate(news)
  const insertObject = {
    title: news.title,
    subtitle: news.subtitle,
    content: news.content,
    author_id: news.author_id
  }
  try {
    const result = await insertHelper(insertObject, tableName)
  }
  catch(error){
    throw Handler.externalIdError(error, news.author_id, 'USERS')
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

const getMultipleNews = async (page = 1) => {
  // it wont send the content
  try{
    const rows = await selectPageHelper(['title', 'subtitle', 'author_id', 'id'], page, tableName)
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

const updateNews = async (news) => {
  validateNewsUpdate(news)
  try{
    const updateObject = {
      title: news.title,
      subtitle: news.subtitle,
      content: news.content
    }
    const [result] = await updateHelper(updateObject, news.id, tableName)
    if(!result){
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, news.id)
  }
}

module.exports = {
  createNews,
  deleteNews,
  getMultipleNews,
  getNews,
  updateNews
}
