
// errors
const { validateUpdatePassword, validateUpdateMail } = require('./validatorsUsers')

// helpers
const { 
  updateHelper,
  deleteHelper,
  selectOneHelper,
  selectPageHelper
} = require('../../utils/queryHelper')
const { bcryptPassword } = require('../../utils/bcryptHelper')

// db
const tableName = 'USERS'

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

const updatePasswordUser = async (updateBody) => {
  validateUpdatePassword(updateBody.password)
  try{
    updateBody.password = await bcryptPassword(updateBody.password)
    const [result] = await updateHelper(updateBody, tableName)
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

const updateMailUser = async (updateObject) => {
  validateUpdateMail(updateObject.mail)
  try{
    const [result] = await updateHelper(updateObject, tableName)
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

const deleteUser = async (userId) => {
  try{
    const [result] = await deleteHelper({ id: userId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, userId)
  }
}

const getUser = async (userId) => {
  try {
    const [ userInfo ] = await selectOneHelper(OpenPersonalInfo, { id: userId }, tableName)
    console.log(userInfo)
    return userInfo
  }
  catch(error) {
    throw Handler.idError(error, userId)
  }
}

const getMultipleUsers = async (page = 1) => {
  try{
    const data = await selectPageHelper(OpenPersonalInfo, page, tableName)
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
  deleteUser,
  getMultipleUsers,
  getUser,
  updatePasswordUser,
  updateMailUser
}
