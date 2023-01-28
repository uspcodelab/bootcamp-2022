
const { StatusCodes } = require('http-status-codes')
const usersService = require('../../services/users/usersService')

const getPage = async (req, res) => {
  const {data, meta} = await usersService.getMultipleUsers(req.query.page)
  res.status(StatusCodes.OK).json({
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
  res.status(StatusCodes.OK).json({ user })
}

const showMe = async (req, res) => {
  const id = req.user.id
  const user = await usersService.getUser(id)
  res.status(StatusCodes.OK).json({ user })
}

const remove = async (req, res) => {
  const id = req.params.id
  await usersService.deleteUser(id)
  res.status(StatusCodes.OK).json({
    message: 'success'
  })
  return
}


module.exports = {
  getPage,
  showMe,
  getUser,
  remove
}
