
const { StatusCodes } = require('http-status-codes')
const statusService = require('../../services/statusService');

const updateStatus = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    status: req.body.status 
  }
  await statusService.update(updateObject)
  res.status(StatusCodes.OK).json({
    message: 'Success'
  });
}

module.exports = updateStatus 
