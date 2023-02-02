
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
  const updateObject = {
    id: req.user.id,
    password: req.body.password
  }
  await usersService.updatePasswordUser(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const updateMail = async (req, res) => {
  const updateObject = {
    id: req.user.id,
    password: req.body.mail
  }
  await usersService.updatePasswordUser(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] })
}

const updateRole = async (req, res) => {
  const updateObject = {
    id: req.body.id,
    role: req.body.role
  }
  await usersService.updateRoleUser(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] })
}

module.exports = {
  getPage,
  showMe,
  getUser,
  remove,
  updatePassword,
  updateMail,
  updateRole
}
