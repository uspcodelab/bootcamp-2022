
const CustomError = require('../../errors/custom_errors')
const errors = require('../../errors/error_messages').users
const validator = require('validator')
const { passwordStrength } = require('check-password-strength')

const validateUpdatePassword = (password) => {
  if(!password){
    throw new CustomError.BadRequestError(errors.password.undef)
  }
  else {
    const strength = passwordStrength(password)
    if(strength.id == 0){
      throw new CustomError.BadRequestError(errors.password.tweak)
    }
    else if(strength.id == 1) {
      throw new CustomError.BadRequestError(errors.password.weak)
    }
  }
}

const validateUpdateMail = (mail) => {
  if(!mail){
    throw new CustomError.BadRequestError(errors.mail.undef)
  }
  else if(typeof mail !== 'string'){
    throw new CustomError.BadRequestError(errors.mail.str)
  }
  else if(!validator.isEmail(mail)){
    throw new CustomError.BadRequestError(errors.mail.vld)
  }
}

module.exports = {
  validateUpdatePassword,
  validateUpdateMail
} 
