
module.exports = (req) => {

  // errors
  const errors = require('../../errors/error_messages')(req).users
  const CustomError = require('../../errors/custom_errors')

  // helpers
  const validator = require('validator')
  const { passwordStrength } = require('check-password-strength')

  const config = require('../../config')

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

  const validateUpdateRole = (role) => {
    if(!role){
      throw new CustomError.BadRequestError(errors.role.undef)
    }
    else if(!config.roles.includes(role)){
      throw new CustomError.BadRequestError(errors.role.notExt)
    }
  }

  return {
    validateUpdatePassword,
    validateUpdateMail,
    validateUpdateRole
  } 
}
