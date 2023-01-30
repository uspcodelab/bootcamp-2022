
const CustomError = require('../../errors')
const errors = require('../../errors/error-messages.json').machines
const { checkExistanceHelper } = require('../../utils/queryHelper')

const tableName = 'MACHINES'

const validateStatus = (messages, status) => {
  if (status === undefined) {
    messages.push(errors.status.undef);
  }
  else if(!(typeof status === 'boolean')){
    messages.push(errors.status.bool)
  }
}

const validateMachineName = (messages, name) => {
  if (!name){
    messages.push(errors.name.undef);
  }
  else if(typeof name !== 'string') {
    messages.push(errors.name.str);
  }
  else if(name.length > 30){
    messages.push(errors.name.len)
  }
}

const validateRepetition = async (messages, name) => {
  const result = await checkExistanceHelper({ name }, tableName)
  let nameExists = false
  if(result.length > 0) {
    result.forEach(u => {
      if(u.name === name && nameExists === false){
        messages.push(errors.name.ext)
        emailExists = true
      }
    })
  }
}

const validateMachine = async (machine) => {
  const messages = [];

  if (!machine) {
    messages.push(errors.mch.undef);
  }

  validateStatus(messages, machine.status)
  validateMachineName(messages, machine.name)

  await validateRepetition(messages, machine.name)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateMachine
