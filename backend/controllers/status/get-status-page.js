
const { StatusCodes } = require('http-status-codes')
const statusService = require('../../services/statusService');

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

module.exports = getStatusPage 
