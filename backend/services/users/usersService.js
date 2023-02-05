
module.exports = (req) => {
  
  // validators
  const { 
    validateUpdatePassword,
    validateUpdateMail,
    validateUpdateRole
  } = require('./validatorsUsers')(req)

  // errors
  const Handler = require('../../errors/error_handlers')(req)

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
      throw Handler.idError(error, updateObject.id)
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
      return userInfo
    }
    catch(error) {
      throw Handler.idError(error, userId)
    }
  }

  const updateRoleUser = async (updateObject) => {
    validateUpdateRole(updateObject.role)
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

  const getMultipleUsers = async (page = 1) => {
    try{
      const data = await selectPageHelper(OpenPersonalInfo, page, tableName)
      const meta = {page, size: data.length};
      return {
        data,
        meta
      }
    }
    catch(error){
      throw Handler.pageError(error, page)
    }
  }

  return {
    deleteUser,
    getMultipleUsers,
    getUser,
    updatePasswordUser,
    updateMailUser,
    updateRoleUser
  }
}
