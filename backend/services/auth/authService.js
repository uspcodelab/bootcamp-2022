
const db = require('../db')
const CustomError = require('../../errors')
const { validateUser, validateLoginInfo } = require('./validatorsAuth')
const { insertHelper } = require('../../utils/queryHelper')
const { bcryptPassword, comparePasswords } = require('../../utils/bcryptHelper')
const errors = require('../../errors/error-messages.json').auth
const Handler = require('../../errors/error-handlers')

const tableName = 'USERS'

const registerAuth = async (userBody) => {
  // username, password, mail, shell, user_group, ssh_access, link_type, institute
  validateUser(userBody)
  userBody.password = await bcryptPassword(userBody.password)
  try {
    const user = await insertHelper(userBody, tableName)
    return user
  }
  catch(error){
    throw Handler.alreadyExistsError(error)
  }
}

const loginAuth = async (loginInfo) => {
  validateLoginInfo(loginInfo)
  const [user] = await db.query(
    'SELECT id, name, username, role, password FROM USERS WHERE mail = $1', 
    [loginInfo.mail]
  )
  if(!user) {
    throw new CustomError.UnauthenticatedError(errors.credential.wrg)
  }
  const isMatch = await comparePasswords(loginInfo.password, user.password)
  if(!isMatch){
    throw new CustomError.UnauthenticatedError(errors.credential.wrg)
  }
  return user
}

module.exports = {
  registerAuth,
  loginAuth
}
