
const helper = require('../../utils/pageHelper');
const CustomError = require('../../errors')
const validateWarning = require('./validatorsWarnings')

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'WARNINGS'

const createWarning = async (warning) => {
  await validateWarning(warning)
  const insertObject = {
    title: warning.title,
    icon: warning.icon,
    content: warning.content,
    class_id: warning.class_id
  }
  const result = await insertHelper(insertObject, tableName)
  if(result.length == 0) {
    throw new CustomError.InternalServerError('Error when submitting warning to db')
  }
}

const deleteWarning = async (warning) => {
  const result = await deleteHelper({ id: warning }, tableName)
  if(result.length == 0) {
    throw new CustomError.NotFoundError(`Not found warning with id ${warningClassId}`)
  }
}

const getMultipleWarnings = async (page = 1) => {
  const rows = await selectPageHelper(
    ['title', 'icon', 'content', 'class_id', 'id'],
    page, tableName)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const updateWarning = async (warningBody) => {
  await validateWarning(warningBody)
  const updateObject = {
    title: warningBody.title,
    icon: warningBody.icon,
    content: warningBody.content,
    class_id: warningBody.class_id
  }
  const result = await updateHelper(updateObject, warningBody.id, tableName)
  if(result.length === 0) {
    throw new CustomError.NotFoundError(`There is no class with id ${warningBody.id}`)
  }
}

module.exports = {
  createWarning,
  deleteWarning,
  getMultipleWarnings,
  updateWarning
}
