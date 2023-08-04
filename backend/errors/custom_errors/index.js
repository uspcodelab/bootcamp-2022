const CustomAPIError = require('./custom-api');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./not-found');
const BadRequestError = require('./bad-request');
const UnauthorizedError = require('./unauthorized')
const InternalServerError = require('./internal-server')

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  InternalServerError
};
