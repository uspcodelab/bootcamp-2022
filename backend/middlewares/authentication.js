
const { verifyCookie, attachCookieToResponse } = require('../utils/jwt')
const CustomError = require('../errors')

const authenticateUser = (req, res, next) => {
  const { accessCookie } = req.signedCookies
  try {
    const payload = verifyCookie(accessCookie)
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

const roleCheck = ([...roles]) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      );
    }
    next()
  }
}

const personalChangesPermissionCheck = ([...roles]) => {
  return (req, res, next) => {
    const id = req.params.id
    if (roles.includes(req.user.role)) {
      return next()
    }
    if(id === req.user.id) {
      return next()
    }
    throw new CustomError.UnauthorizedError(
      'Unauthorized to access this route'
    )
  }
}

module.exports = {
  authenticateUser,
  roleCheck,
  personalChangesPermissionCheck
}

