
const { verifyCookie, attachCookieToResponse } = require('../utils/jwt')
const CustomError = require('../errors')

const authenticateUser = (req, res, next) => {
  const { accessCookie } = req.signedCookies
  try {
    const payload = verifyCookie(accessCookie)
    console.log(payload)
    req.user = {
      id: payload.id,
      name: payload.name,
      username: payload.username,
      role: payload.role
    }
    attachCookieToResponse(res, payload) // refresh the cookie
    next()
  }
  catch(error){
    throw new CustomError.UnauthenticatedError('You are not logged in')
  }
}

const authorizePermissions = ([...roles]) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      );
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions
}

