
const { StatusCodes } = require('http-status-codes')
const userService = require('../../services/user/userService')

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
  getUserPage
}
