
const { StatusCodes } = require('http-status-codes')
const faqService = require('../../services/faq/faqService');

const create = async (req, res) => {
  const createObject = {
    question: req.body.question,
    answer: req.body.answer
  }
  await faqService.createFaq(createObject)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const update = async (req, res) => {
  const updateObject = {
    id: req.params.id,
    question: req.body.question,
    answer: req.body.answer
  }
  await faqService.updateFaq(updateObject)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const remove = async (req, res) => {
  const removeId = req.params.id
  await faqService.deleteFaq(removeId)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const getAll = async (req, res) => {
  const { data, meta } = await faqService.getAllFaqs()
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

module.exports = {
  create,
  getAll,
  remove,
  update
}
