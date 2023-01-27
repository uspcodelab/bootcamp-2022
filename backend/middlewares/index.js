
const allowFrontendMiddleware = require('./allow-frontend')
const errorHandlerMiddleware = require('./error-handler') 
const notFoundMiddleware = require('./not-found')

module.exports = {
  allowFrontendMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware
}
