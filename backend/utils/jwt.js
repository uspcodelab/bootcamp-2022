
const jwt = require('jsonwebtoken')

require('dotenv').config()

const createCookie = (payload) => {
  const cookie = jwt.sign(payload, process.env.COOKIE_SECRET)
  return cookie 
}

const verifyCookie = (cookie) => jwt.verify(cookie, process.env.COOKIE_SECRET)

const attachCookieToResponse = (res, payload) => {
  const cookie = createCookie(payload)
  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('accessCookie', cookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + oneDay)
  })
}

module.exports = {
  verifyCookie,
  attachCookieToResponse
}
