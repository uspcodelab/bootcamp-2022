
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
  const somethingWrong = require('../errors/error_messages')(req, res).somethingWrong
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    messages: err.messages || [somethingWrong],
  }
  console.log(err)
  return res
    .status(customError.statusCode)
    .json({ messages: customError.messages })
};

module.exports = errorHandlerMiddleware;
