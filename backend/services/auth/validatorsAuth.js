
// errors
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages').auth

// helpers to validate stuff
const validator = require('validator')
const { passwordStrength } = require('check-password-strength')

const config = require('../../config')

const validateName = (messages, name) => {
  if(!name){
    messages.push(errors.name.undef)
  }
  else if(typeof name !== 'string'){
    messages.push(errors.name.str)
  }
  else if(name.length > 128){
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
  else if(username.length > 128){
    messages.push(errors.username.len)
  }
}

const validatePasswordRegister = (messages, password) => {
  if(!password){
    messages.push(errors.password.undef)
  }
  else if(typeof password !== 'string'){
    messages.push(errors.password.str)
  }
  else {
    const strength = passwordStrength(password)
    if(strength.id == 0){
      messages.push(errors.password.tweak)
    }
    else if(strength.id == 1) {
      messages.push(errors.password.weak)
    }
  }
}

const validatePasswordLogin = (messages, password) => {
  if(!password){
    messages.push(errors.password.undef)
  }
  else if(typeof password !== 'string'){
    messages.push(errors.password.str)
  }
}

const validateMailRegister = (messages, mail) => {
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

const validateMailLogin = (messages, mail) => {
  if(!mail){
    messages.push(errors.mail.undef)
  }
  else if(typeof mail !== 'string'){
    messages.push(errors.mail.str)
  }
}

const validateUserGroup = (messages, group) => {
  if(!group){
    messages.push(errors.userGroup.undef)
  }
  else if(typeof group !== 'string'){
    messages.push(errors.userGroup.str)
  }
  else if(group.length > 32){
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
  else if(link.length > 64){
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
  else if(institute.length > 64){
    messages.push(errors.institute.len)
  }
}

const validateShell = (messages, shell) => {
  if(typeof shell !== 'string'){
    messages.push(errors.shell.str)
  }
  else if(shell.length > 32){
    messages.push(errors.shell.len)
  }
}


const validateSSHAccess = (messages, access) => {
  if(typeof access !== 'boolean'){
    messages.push(errors.ssh.bool)
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

const validateUser = (user) => {
  const messages = []
  if(!user) {
    throw new CustomError.BadRequestError(errors.register.undef)
  }
  validateName(messages, user.name)
  validateUsername(messages, user.username)
  validatePasswordRegister(messages, user.password)
  validateMailRegister(messages, user.mail) 
  validateUserGroup(messages, user.user_group)
  validateLink(messages, user.link_type)
  validateInstitute(messages, user.institute)
  validateRole(messages, user.role)

  if(user.shell !== undefined){
    validateShell(messages, user.shell)
  }
  if(user.ssh_access !== undefined){
    validateSSHAccess(messages, user.ssh_access)
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
  validateMailLogin(messages, loginInfo.mail)
  validatePasswordLogin(messages, loginInfo.password)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = {
  validateUser,
  validateLoginInfo
}


