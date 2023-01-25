
const db = require('../db')
const bcrypt = require('bcrypt')
const CustomError = require('../../errors')
const { validateUser, validateLoginInfo } = require('./validatorsAuth')
const config = require('../../config')

const hashPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(plainPassword, salt)
}

const createRegisterQuery = (user) => {
  const keys = Object.keys(user)
  const values = Object.values(user)
  const args = values.map((_, i) => '$' + (i + 1).toString()).join()
  return `
    INSERT INTO USUARIOS (${keys.join()}) VALUES (${args}) RETURNING *
  `
}

const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword) 
}

const register = async (userBody) => {
  // username, password, mail, shell, user_group, ssh_access, link_type, institute
  validateUser(userBody)
  user.password = await hashPassword(userBody.password)
  const query = createRegisterQuery(userBody)
  const [user] = await db.query(query, [...Object.values(user)])
  if(!user){
    throw new CustomError.InternalServerError('Error when submitting user to db')
  }
  return user
}

const login = async (loginInfo) => {
  validateLoginInfo(loginInfo)
  const [user] = await db.query(
    'SELECT id, name, username, role, password FROM USUARIOS WHERE mail = $1', 
    [loginInfo.mail]
  )
  if(!user) {
    throw new CustomError.UnauthenticatedError('Wrong credentials')
  }
  const isMatch = await comparePasswords(loginInfo.password, user.password)
  if(!isMatch){
    throw new CustomError.UnauthenticatedError('Wrong credentials')
  }
  return user
}

module.exports = {
  register,
  login
}
