const CustomError = require('./index')

const idError = (error, id) => {
  if(error.statusCode){ // if the error is already defined
    return error
  }
  if(error.code === '22P02'){
    return new CustomError.NotFoundError(`Not found id ${id}`)
  }
  return new CustomError.InternalServerError('Something went really wrong')
}

const externalIdError = (error, externalId, externalTableName) => {
  if(error.code === '23503') {
    return new CustomError.NotFoundError(`Not found id ${externalId} in table ${externalTableName}`)
  }
  return new CustomError.InternalServerError('Something went really wrong')
}

const pageError = (error, page) => {
  if(error.code === '22P02'){
    return new CustomError.BadRequestError(`Invalid page ${page}`)
  }
  return new CustomError.InternalServerError('Something went really wrong')
}

const alreadyExistsError = (error) => {
  if(error.code === '23505') {
    const detail = error.detail
    const start = detail.indexOf('(') + 1
    const end = detail.indexOf(')')
    const param = detail.substring(start, end)
    return new CustomError.BadRequestError(`User ${param} already exists`)
  }
  return new CustomError.InternalServerError('Something went really wrong')
}

module.exports = {
  idError,
  externalIdError,
  pageError,
  alreadyExistsError 
}
