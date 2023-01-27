
const validateStatus = (messages, status) => {
  if (status === undefined) {
    messages.push('Please provide status property');
  }
  if(!(typeof status === 'boolean')){
    messages.push('Status property must be a boolean')
  }
}

const validateMachineName = (messages, machine) => {
  if (!machine){
    messages.push('Please provide machine property');
  }
  if(typeof machine !== 'string') {
    messages.push('Machine property must be a string');
  }
  else if(machine.length > 30){
    messages.push('Machine name cannot be longer than 30 characters')
  }
}

const validateCreate = (status) => {
  const messages = [];

  if (!status) {
    messages.push('No object has been provided');
  }

  validateStatus(messages, status.status)
  validateMachineName(messages, status.machine)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages.join());
  }
}

const validateUpdate = (updateObject) => {
  const messages = []
  if(updateObject.status === undefined){
    messages.push('Please provide new status')
  }
  else if(typeof updateObject.status !== 'boolean'){
    messages.push('The new status must be a boolean')
  }
  if(!updateObject.id){
    messages.push('Please provide id')
  }
  if(messages.length > 0){
    throw new CustomError.BadRequestError(messages.join());
  }
}

module.exports = {
  validateCreate,
  validateStatus,
  validateUpdate,
  validateMachineName
}
