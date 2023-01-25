
const validator = require('validator')
const CustomError = require('../../errors')

const validateName = (messages, name) => {
  if(!name){
    messages.push('Please provide name')
  }
  if(typeof name !== 'string'){
    messages.push('Name must be string')
  }
  if(name.length > 255){
    messages.push('Name must have at most 255 characters')
  }
}

const validateUsername = (messages, username) => {
  if(!username){
    messages.push('Please provide username')
  }
  if(typeof username !== 'string'){
    messages.push('Username must be string')
  }
  if(username.length > 255){
    messages.push('Username must have at most 255 characters')
  }
}

const validatePassword = (messages, password) => {
  if(!password){
    messages.push('Please provide password')
  }
  if(typeof password !== 'string'){
    messages.push('password must be string')
  }
  // the strength of the password should be tested in the frontend
  // (and maybe here also)
}

const validateMail = (messages, mail) => {
  if(!mail){
    messages.push('Please provide mail')
  }
  if(typeof mail !== 'string'){
    messages.push('Mail must be string')
  }
  if(!validator.isEmail(mail)){
    messages.push('Mail not valid')
  }
}

const validateUserGroup = (messages, group) => {
  if(!group){
    messages.push('Please provide group')
  }
  if(typeof group !== 'string'){
    messages.push('Group must be string')
  }
  if(group.length > 255){
    messages.push('Group must have at most 255 characters')
  }
}

const validateLink= (messages, link) => {
  if(!link){
    messages.push('Please provide link')
  }
  if(typeof link !== 'string'){
    messages.push('Link must be string')
  }
  if(link.length > 255){
    messages.push('Link must have at most 255 characters')
  }
}

const validateInstitute = (messages, institute) => {
  if(!institute){
    messages.push('Please provide institute')
  }
  if(typeof institute !== 'string'){
    messages.push('Institute must be string')
  }
  if(institute.length > 255){
    messages.push('Institute must have at most 255 characters')
  }
}

const validateShell = (messages, shell) => {
  if(typeof shell !== 'string'){
    messages.push('Shell must be string')
  }
  if(shell.length > 255){
    messages.push('Shell must have at most 255 characters')
  }
}


const validateAccess = (messages, access) => {
  if(typeof access !== 'string'){
    messages.push('SSH access must be string')
  }
  if(access.length > 255){
    messages.push('SSH access must have at most 255 characters')
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

// precisa verificar que existem:
// username,
// password,
// mail,
// user_group
// link_type
// institute

module.exports = validateUser


