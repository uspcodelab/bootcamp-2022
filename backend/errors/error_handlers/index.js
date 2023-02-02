const CustomError = require('../custom_errors')

const idError = (error, id) => {
  if(error.statusCode){ // if the error is already defined
    return error
  }
  if(error.code === '22P02'){
    return new CustomError.NotFoundError(`Not found id ${id}`)
  }
  return error
}

const externalIdError = (error, externalId, externalTableName) => {
  if(error.code === '23503') {
    return new CustomError.NotFoundError(`Not found id ${externalId} in table ${externalTableName}`)
  }
  return error
}

const pageError = (error, page) => {
  if(error.code === '22P02'){
    return new CustomError.BadRequestError(`Invalid page ${page}`)
  }
  return error
}

const alreadyExistsError = (error) => {
  if(error.code === '23505') {
    const detail = error.detail
    const start = detail.indexOf('(') + 1
    const end = detail.indexOf(')')
    const param = detail.substring(start, end)
    return new CustomError.BadRequestError(`${param.charAt(0).toUpperCase() + param.slice(1)} already exists`)
  }
  return error
}

module.exports = {
  idError,
  externalIdError,
  pageError,
  alreadyExistsError 
}
