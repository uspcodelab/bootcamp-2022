
const db = require('../db')
const helper = require('../../utils/pageHelper');
const config = require('../../config');
const CustomError = require('../../errors')

const errors = require('../../errors/error-messages.json').machines

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectOneHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const OpenPersonalInfo = [
  'id',
  'name',
  'username',
  'mail',
  'shell',
  'user_group',
  'ssh_access',
  'link_type',
  'institute',
  'last_login',
  'role'
]

const tableName = 'USERS'

const getMultipleUsers = async (page = 1) => {
  const rows = await selectPageHelper(OpenPersonalInfo, page, tableName)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const deleteUser = async (userId) => {
  const result = await deleteHelper({ id: userId }, tableName)
  if(result.length == 0) {
    throw new CustomError.NotFoundError(`Not found user with id ${userId}`)
  }
}

const getUser = async (userId) => {
  const [ userInfo ] = await selectOneHelper(OpenPersonalInfo, { id: userId }, tableName)
  if(!userInfo) {
    throw new CustomError.NotFoundError(`Not found user with id ${userId}`)
  }
  return userInfo
}

module.exports = {
  deleteUser,
  getMultipleUsers,
  getUser
}
