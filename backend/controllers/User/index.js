
const { StatusCodes } = require('http-status-codes')
const usersService = require('../../services/users/usersService')

const getPage = async (req, res) => {
  const {data, meta} = await usersService.getMultipleUsers(req.query.page)
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    }
  })
}

const getUser = async (req, res) => {
  const id = req.params.id
  const user = await usersService.getUser(id)
  res.status(StatusCodes.OK).json({ 
    messages: [],
    data: user,
  })
}

const showMe = async (req, res) => {
  const id = req.user.id
  const user = await usersService.getUser(id)
  res.status(StatusCodes.OK).json({ 
    messages: [],
    data: user
  })
}

const remove = async (req, res) => {
  const id = req.params.id
  await usersService.deleteUser(id)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const updatePassword = async (req, res) => {
  const id = req.user.id
  await usersService.updatePasswordUser({ id, newPassword: req.body.password })
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  showMe,
  getUser,
  remove,
  updatePassword
}
