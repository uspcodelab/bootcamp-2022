
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages').auth
const Handler = require('../../errors/error_handlers')

// validator
const { validateUser, validateLoginInfo } = require('./validatorsAuth')

// helpers
const { insertHelper } = require('../../utils/queryHelper')
const { bcryptPassword, comparePasswords } = require('../../utils/bcryptHelper')

// db
const db = require('../db')
const tableName = 'USERS'

const registerAuth = async (userBody) => {
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
