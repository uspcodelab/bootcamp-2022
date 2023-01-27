
const { StatusCodes } = require('http-status-codes')
const authService = require('../../services/auth/authService')
const { attachCookieToResponse } = require('../../utils/jwt')
const createCookiePayloadFromUser = require('../../utils/create-cookie-payload-from-user.js')

const registerUser = async (req, res) => {
  const user = await authService.register(req.body) 
  const payload = createCookiePayloadFromUser(user)
  attachCookieToResponse(res, payload)
  res.status(StatusCodes.CREATED).json({ message: 'success' })
}

const loginUser = async (req, res) => {
  // req.body has email and password
  const user = await authService.login(req.body)
  const payload = createCookiePayloadFromUser(user)
  attachCookieToResponse(res, payload)
  res.status(StatusCodes.OK).json({ message: 'success' })
}

module.exports = {
  registerUser,
  loginUser
}

