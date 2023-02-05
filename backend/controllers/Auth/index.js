
const controllers = (req) => {

  const { StatusCodes } = require('http-status-codes')
  const { attachCookieToResponse } = require('../../utils/jwt')
  const createCookiePayloadFromUser = require('../../utils/create-cookie-payload-from-user.js')

  const authService = require('../../services/auth/authService')(req)

  const register = async (req, res) => {
    const registerObject = {
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
      mail: req.body.mail,
      user_group: req.body.user_group,
      link_type: req.body.link_type, 
      institute: req.body.institute,
    }
    if(req.body.shell){
      registerObject.shell = req.body.shell
    }
    if(req.body.description){
      registerObject.description = req.body.description
    }
    if(req.body.role){
      registerObject.role = req.body.role
    }
    const user = await authService.registerAuth(registerObject) 
    const payload = createCookiePayloadFromUser(user)
    attachCookieToResponse(res, payload)
    res.status(StatusCodes.CREATED).json({ messages: []})
  }

  const login = async (req, res) => {
    const loginObject = {
      mail: req.body.mail,
      password: req.body.password
    } 
    const user = await authService.loginAuth(loginObject)
    const payload = createCookiePayloadFromUser(user)
    attachCookieToResponse(res, payload)
    res.status(StatusCodes.OK).json({ messages: []})
  }

  return {
    register,
    login
  }
}

module.exports = {
  register (req, res) {
    return controllers(req).register(req, res)
  },
  login (req, res) {
    return controllers(req).login(req, res)
  }
}
