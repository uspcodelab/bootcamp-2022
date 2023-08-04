
module.exports = (req) => {

  // validators
  const { validateUser, validateLoginInfo } = require('./validatorsAuth')(req)

  // errors
  const errors = require('../../errors/error_messages')(req).auth
  const Handler = require('../../errors/error_handlers')(req)
  const CustomError = require('../../errors/custom_errors')

  // helpers
  const { insertHelper, selectOneHelper } = require('../../utils/queryHelper')
  const { bcryptPassword, comparePasswords } = require('../../utils/bcryptHelper')

  // db
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
    const selectArray = ['id', 'name', 'username', 'role', 'password']
    const [user] = await selectOneHelper(selectArray, { mail: loginInfo.mail }, tableName)
    if(!user) {
      throw new CustomError.UnauthenticatedError(errors.credential.wrg)
    }
    const isMatch = await comparePasswords(loginInfo.password, user.password)
    if(!isMatch){
      throw new CustomError.UnauthenticatedError(errors.credential.wrg)
    }
    return user
  }

  return {
    registerAuth,
    loginAuth
  }
}
