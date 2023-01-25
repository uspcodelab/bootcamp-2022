
const validator = require('validator')
const CustomError = require('../../errors')
const config = require('../../config')

const validateName = (messages, name) => {
  if(!name){
    messages.push('Please provide name')
  }
  else if(typeof name !== 'string'){
    messages.push('Name must be string')
  }
  else if(name.length > 255){
    messages.push('Name must have at most 255 characters')
  }
}

const validateUsername = (messages, username) => {
  if(!username){
    messages.push('Please provide username')
  }
  else if(typeof username !== 'string'){
    messages.push('Username must be string')
  }
  else if(username.length > 255){
    messages.push('Username must have at most 255 characters')
  }
}

const validatePassword = (messages, password) => {
  if(!password){
    messages.push('Please provide password')
  }
  else if(typeof password !== 'string'){
    messages.push('password must be string')
  }
  // the strength of the password should be tested in the frontend
  // (and maybe here also)
}

const validateMail = (messages, mail) => {
  if(!mail){
    messages.push('Please provide mail')
  }
  else if(typeof mail !== 'string'){
    messages.push('Mail must be string')
  }
  else if(!validator.isEmail(mail)){
    messages.push('Mail not valid')
  }
}

const validateUserGroup = (messages, group) => {
  if(!group){
    messages.push('Please provide group')
  }
  else if(typeof group !== 'string'){
    messages.push('Group must be string')
  }
  else if(group.length > 255){
    messages.push('Group must have at most 255 characters')
  }
}

const validateLink= (messages, link) => {
  if(!link){
    messages.push('Please provide link')
  }
  else if(typeof link !== 'string'){
    messages.push('Link must be string')
  }
  else if(link.length > 255){
    messages.push('Link must have at most 255 characters')
  }
}

const validateInstitute = (messages, institute) => {
  if(!institute){
    messages.push('Please provide institute')
  }
  else if(typeof institute !== 'string'){
    messages.push('Institute must be string')
  }
  else if(institute.length > 255){
    messages.push('Institute must have at most 255 characters')
  }
}

const validateShell = (messages, shell) => {
  if(typeof shell !== 'string'){
    messages.push('Shell must be string')
  }
  else if(shell.length > 255){
    messages.push('Shell must have at most 255 characters')
  }
}


const validateAccess = (messages, access) => {
  if(typeof access !== 'string'){
    messages.push('SSH access must be string')
  }
  else if(access.length > 255){
    messages.push('SSH access must have at most 255 characters')
  }
}

const validateRole = (messages, role) => {
  if(!role){
    messages.push('Please provide a role')
  }
  else if(!config.roles.includes(role)){
    messages.push('The role provided does not exist')
  }
  else if(config.NODE_ENV !== 'development' && config.privilegedRoles.includes(user.role)){
    messages.push('In production, this route does not register privileged roles')
  }
}

const validateUser = (user) => {
  const messages = []
  if(!user) {
    throw new CustomError.BadRequestError('User not provided')
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
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages.join());
  }
}

const validatePasswordLogin = (messages, password) => {
  if(!password){
    messages.push('Please provide password')
  }
  else if(typeof password !== 'string'){
    messages.push('Password must be a string')
  }
}

const validateLoginInfo = (loginInfo) => {
  const messages = []
  if(!loginInfo) {
    throw new CustomError.BadRequestError('Please provide login info')
  }
  validateMail(messages, loginInfo.mail)
  validatePasswordLogin(messages, loginInfo.password)
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages.join());
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


