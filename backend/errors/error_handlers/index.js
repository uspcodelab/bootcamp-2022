const CustomError = require('../custom_errors')

module.exports = (req) => {

  const errors = require('../error_messages')(req).errorHandlers

  const idError = (error, id) => {
    if(error.statusCode){ // if the error is already defined
      return error
    }
    if(error.code === '22P02'){
      return new CustomError.NotFoundError(errors.idError + id)
    }
    return error
  }

  const externalIdError = (error, externalId, externalTableName) => {
    if(error.code === '23503') {
      return new CustomError.NotFoundError(errors.externalId1 + externalId + errors.externalId2 + externalTableName)
    }
    return error
  }

  const pageError = (error, page) => {
    if(error.code === '22P02'){
      return new CustomError.BadRequestError(errors.pageError + page)
    }
    return error
  }

  const alreadyExistsError = (error) => {
    if(error.code === '23505') {
      const detail = error.detail
      const start = detail.indexOf('(') + 1
      const end = detail.indexOf(')')
      const param = detail.substring(start, end)
      return new CustomError.BadRequestError(param.charAt(0).toUpperCase() + param.slice(1) + errors.alreadyExists)
    }
    return error
  }

  return {
    idError,
    externalIdError,
    pageError,
    alreadyExistsError 
  }
}
