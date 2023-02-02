
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class UnauthorizedError extends CustomAPIError {
  constructor(messages){
    super(messages)
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
