
const { StatusCodes } = require('http-status-codes');
const NODE_ENV = require('../config').NODE_ENV

const errorHandlerMiddleware = (err, req, res, next) => {
  if(NODE_ENV === 'development'){
    console.log(err)
  }
  const somethingWrong = require('../errors/error_messages')(req, res).somethingWrong
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    messages: err.messages || [somethingWrong],
  }
  return res
    .status(customError.statusCode)
    .json({ messages: customError.messages })
};

module.exports = errorHandlerMiddleware;
