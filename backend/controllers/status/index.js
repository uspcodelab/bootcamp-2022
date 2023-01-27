
const { StatusCodes } = require('http-status-codes')
const statusService = require('../../services/status/statusService');

const createStatus = async (req, res) => {
  await statusService.create(req.body)
  res.status(StatusCodes.CREATED).json({
    message: 'Success'
  });
}

const getStatusPage = async (req, res) => {
  const { data, meta } = await statusService.getMultiple(req.query.page) // default value === 1
  res.status(StatusCodes.OK).json({
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

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

const deleteStatus = async (req, res) => {
  await statusService.deleteSt(req.params.id)
  res.status(StatusCodes.OK).json({
    message: 'Success'
  });
}

module.exports = {
  createStatus,
  getStatusPage,
  updateStatus,
  deleteStatus
}
