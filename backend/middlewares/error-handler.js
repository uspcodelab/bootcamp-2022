const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    messages: err.messages || ['Something went wrong. Please, try again later'],
  };
  console.log(err)
  return res
    .status(customError.statusCode)
    .json({ messages: customError.messages });
};

module.exports = errorHandlerMiddleware;
