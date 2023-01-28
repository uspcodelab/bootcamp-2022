
const { StatusCodes } = require('http-status-codes')
const authService = require('../../services/auth/authService')
const { attachCookieToResponse } = require('../../utils/jwt')
const createCookiePayloadFromUser = require('../../utils/create-cookie-payload-from-user.js')

const register = async (req, res) => {
  const user = await authService.registerAuth(req.body) 
  const payload = createCookiePayloadFromUser(user)
  attachCookieToResponse(res, payload)
  res.status(StatusCodes.CREATED).json({ messages: []})
}

const login = async (req, res) => {
  // req.body has email and password
  const user = await authService.loginAuth(req.body)
  const payload = createCookiePayloadFromUser(user)
  attachCookieToResponse(res, payload)
  res.status(StatusCodes.OK).json({ messages: []})
}

module.exports = {
  register,
  login
}

