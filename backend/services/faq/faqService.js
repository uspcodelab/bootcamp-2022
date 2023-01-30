const db = require('../db');
const helper = require('../../utils/pageHelper');
const config = require('../../config');
const CustomError = require('../../errors')
const validateFaq = require('./validatorsFaq')

const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'FAQ'

const errors = require('../../errors/error-messages.json').faqs

const createFaq = async (faq) => {
  validateFaq(faq);
  const insertObject = {
    question: faq.question,
    answer: faq.answer
  }
  await insertHelper(insertObject, tableName)
  throw new CustomError.InternalServerError('Something went wrong')
}

const updateFaq = async (faq) => {
  validateFaq(faq)
  try {
    const updateObject = {
      question: faq.question,
      answer: faq.answer
    }
    const [result] = await updateHelper(updateObject, faq.id, tableName)
    if(!result){
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, faq.id)
  }
  // console.log(updatedFaq)
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

const getMultipleFaqs = async (page = 1) => {
  const selectArray = ['id', 'status', 'name']
  try{
    const rows = await selectPageHelper(selectArray, page, tableName)
    const data = helper.emptyOrRows(rows); // acho que tenho que tirar isso
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
  getMultipleFaqs,
  createFaq,
  updateFaq,
  deleteFaq
}
