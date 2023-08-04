const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class UnauthenticatedError extends CustomAPIError {
  constructor(messages){
    super(messages)
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
