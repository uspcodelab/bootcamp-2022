
const { StatusCodes } = require('http-status-codes')
const authService = require('../../services/auth/authService')
const { attachCookieToResponse } = require('../../utils/jwt')

const registerUser = async (req, res) => {
  const user = req.body
  await authService.register(user) 
  const payload = {
    id: user.id,
    name: user.name,
    username: user.username,
  }
  attachCookieToResponse(res, payload)
  res.status(StatusCodes.CREATED).json({ message: 'success' })
}

module.exports = {
  registerUser
}

