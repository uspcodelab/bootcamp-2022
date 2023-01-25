
const { StatusCodes } = require('http-status-codes')
const userService = require('../../services/user/userService')

const createUser = async (req, res) => {
  const user = await userService.create(req.body) 
  res.status(StatusCodes.CREATED).json({ message: 'success' })
}

const getUserPage = async (req, res) => {
  const {data, meta} = await userService.getMultiple(req.query.page)
  res.status(StatusCodes.OK).json({
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

module.exports = {
  createUser,
  getUserPage
}
