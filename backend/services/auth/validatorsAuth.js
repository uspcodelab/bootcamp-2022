
const validator = require('validator')
const CustomError = require('../../errors')
const errors = require('../../errors/error-messages.json').auth
const config = require('../../config')
const { checkExistanceHelper } = require('../../utils/queryHelper')

const tableName = 'USERS'

const validateName = (messages, name) => {
  if(!name){
    messages.push(errors.name.undef)
  }
  else if(typeof name !== 'string'){
    messages.push(errors.name.str)
  }
  else if(name.length > 255){
    messages.push(errors.name.len)
  }
}

const validateUsername = (messages, username) => {
  if(!username){
    messages.push(errors.username.undef)
  }
  else if(typeof username !== 'string'){
    messages.push(errors.username.str)
  }
  else if(username.length > 255){
    messages.push(errors.username.len)
  }
}

const validatePassword = (messages, password) => {
  if(!password){
    messages.push(errors.password.undef)
  }
  else if(typeof password !== 'string'){
    messages.push(errors.password.str)
  }
  // the strength of the password should be tested in the frontend
  // (and maybe here also)
}

const validateMail = (messages, mail) => {
  if(!mail){
    messages.push(errors.mail.undef)
  }
  else if(typeof mail !== 'string'){
    messages.push(errors.mail.str)
  }
  else if(!validator.isEmail(mail)){
    messages.push(errors.mail.vld)
  }
}

const validateUserGroup = (messages, group) => {
  if(!group){
    messages.push(errors.userGroup.undef)
  }
  else if(typeof group !== 'string'){
    messages.push(errors.userGroup.str)
  }
  else if(group.length > 255){
    messages.push(errors.userGroup.len)
  }
}

const validateLink= (messages, link) => {
  if(!link){
    messages.push(errors.link.undef)
  }
  else if(typeof link !== 'string'){
    messages.push(errors.link.str)
  }
  else if(link.length > 255){
    messages.push(errors.link.len)
  }
}

const validateInstitute = (messages, institute) => {
  if(!institute){
    messages.push(errors.institute.undef)
  }
  else if(typeof institute !== 'string'){
    messages.push(errors.institute.str)
  }
  else if(institute.length > 255){
    messages.push(errors.institute.len)
  }
}

const validateShell = (messages, shell) => {
  if(typeof shell !== 'string'){
    messages.push(errors.shell.str)
  }
  else if(shell.length > 255){
    messages.push(errors.shell.len)
  }
}


const validateAccess = (messages, access) => {
  if(typeof access !== 'string'){
    messages.push(errors.ssh.str)
  }
  else if(access.length > 255){
    messages.push(errors.ssh.len)
  }
}

const validateRole = (messages, role) => {
  if(!role){
    messages.push(errors.role.undef)
  }
  else if(!config.roles.includes(role)){
    messages.push(errors.role.notExt)
  }
  else if(config.NODE_ENV !== 'development' && config.privilegedRoles.includes(user.role)){
    messages.push(errors.role)
  }
}

//const validateRepetition = async (messages, username, mail) => {
//  const result = await checkExistanceHelper({ username, mail }, tableName)
//  let emailExists = false
//  let usernameExists = false 
//  if(result.length > 0) {
//    result.forEach(u => {
//      if(u.mail === mail && emailExists === false){
//        messages.push(errors.mail.ext)
//        emailExists = true
//      }
//      if(u.username === username && usernameExists === false)
//        messages.push(errors.username.ext)
//        usernameExists = true
//    })
//  }
//}

const validateUser = (user) => {
  const messages = []
  if(!user) {
    throw new CustomError.BadRequestError(errors.register.undef)
  }
  validateName(messages, user.name)
  validateUsername(messages, user.username)
  validatePassword(messages, user.password)
  validateMail(messages, user.mail) 
  validateUserGroup(messages, user.user_group)
  validateLink(messages, user.link_type)
  validateInstitute(messages, user.institute)
  validateRole(messages, user.role)

  if(user.shell !== undefined){
    validateShell(messages, user.shell)
  }
  if(user.ssh_access !== undefined){
    validateAccess(messages, user.ssh_access)
  }

//  await validateRepetition(messages, user.username, user.mail)

  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

const validateLoginInfo = (loginInfo) => {
  const messages = []
  if(!loginInfo) {
    throw new CustomError.BadRequestError(errors.login.undef)
  }
  validateMail(messages, loginInfo.mail)
  validatePassword(messages, loginInfo.password)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

// precisa verificar que existem:
// username,
// password,
// mail,
// user_group
// link_type
// institute

module.exports = {
  validateUser,
  validateLoginInfo
}


