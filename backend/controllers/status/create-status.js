
const { StatusCodes } = require('http-status-codes')
const statusService = require('../../services/statusService');

const createStatus = async (req, res) => {
  await statusService.create(req.body)
  res.status(StatusCodes.CREATED).json({
    message: 'Success'
  });
}

module.exports = createStatus
