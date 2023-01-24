const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong. Try again later',
  };
  console.log(err)
  return res.status(customError.statusCode).json({ message: customError.message,
  err});
};

module.exports = errorHandlerMiddleware;
