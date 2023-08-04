
module.exports = (req) => {

  // errors
  const errors = require('../../errors/error_messages')(req).machines
  const CustomError = require('../../errors/custom_errors')

  const validateStatus = (messages, status) => {
    if (status === undefined) {
      messages.push(errors.status.undef);
    }
    else if(typeof status !== 'boolean'){
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
    else if(name.length > 16){
      messages.push(errors.name.len)
    }
  }

  const validateMachine = (machine) => {
    const messages = [];
    if (!machine) {
      messages.push(errors.mch);
    }
    validateStatus(messages, machine.status)
    validateMachineName(messages, machine.name)
    if (messages.length > 0) {
      throw new CustomError.BadRequestError(messages);
    }
  }
  
  return validateMachine
}
