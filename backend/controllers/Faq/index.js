
const { StatusCodes } = require('http-status-codes')
const faqService = require('../../services/faq/faqService');

const create = async (req, res) => {
  await faqService.createFaq(req.body)
  res.status(StatusCodes.CREATED).json({ messages: [] });
}

const getPage = async (req, res) => {
  const { data, meta } = await faqService.getMultipleFaqs(req.query.page)
  res.status(StatusCodes.OK).json({
    messages: [],
    data,
    meta: {
      ...meta,
      size: data.length
    },
  });
}

const update = async (req, res) => {
  const updatedFaq = {
    id: req.params.id,
    question: req.body.question,
    answer: req.body.answer
  }
  await faqService.updateFaq(updatedFaq)
  res.status(StatusCodes.OK).json({ messages: [] });
}

const remove = async (req, res) => {
  await faqService.deleteFaq(req.params.id)
  res.status(StatusCodes.OK).json({ messages: [] });
}

module.exports = {
  create,
  getPage,
  remove,
  update
}
