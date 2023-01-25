
const { StatusCodes } = require('http-status-codes')
const statusService = require('../../services/statusService');

const deleteStatus = async (req, res) => {
  await statusService.deleteSt(req.params.id)
  res.status(StatusCodes.OK).json({
    message: 'Success'
  });
}

module.exports = deleteStatus 
