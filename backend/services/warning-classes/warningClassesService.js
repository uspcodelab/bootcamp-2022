
const helper = require('../../utils/pageHelper');
const CustomError = require('../../errors')
const validateWarningClass = require('./validatorsWarningClasses')

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectOneHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'WARNING_CLASSES'

const createWarningClass = async (warningClass) => {
  validateWarningClass(warningClass)
  const insertObject = {
    title: warningClass.title,
    color: warningClass.color
  }
  const result = await insertHelper(insertObject, tableName)
  if(result.length == 0) {
    throw new CustomError.InternalServerError('Error when submitting warningClass to db')
  }
}

const deleteWarningClass = async (warningClassId) => {
  const result = await deleteHelper({ id: warningClassId }, tableName)
  if(result.length == 0) {
    throw new CustomError.NotFoundError(`Not found warningClass with id ${warningClassId}`)
  }
}

const getMultipleWarningClasses = async (page = 1) => {
  const rows = await selectPageHelper(['title', 'color', 'id'], page, tableName)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const updateWarningClass = async (warningClassBody) => {
  validateWarningClass(warningClassBody)
  const updateObject = {
    color: warningClassBody.color,
    title: warningClassBody.title
  }
  const result = await updateHelper(updateObject, warningClassBody.id, tableName)
  if(result.length === 0) {
    throw new CustomError.NotFoundError(`There is no warningClass with id ${warningClassBody.id}`)
  }
}

module.exports = {
  createWarningClass,
  deleteWarningClass,
  getMultipleWarningClasses,
  updateWarningClass 
}
