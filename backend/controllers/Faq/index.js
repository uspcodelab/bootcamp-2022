
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const faqService = require('../../services/faq/faqService')(req)

  const create = async () => {
    const createObject = {
      question: req.body.question,
      answer: req.body.answer
    }
    await faqService.createFaq(createObject)
    res.status(StatusCodes.CREATED).json({ messages: [] });
  }

  const update = async () => {
    const updateObject = {
      id: req.params.id,
      question: req.body.question,
      answer: req.body.answer
    }
    await faqService.updateFaq(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const remove = async () => {
    const removeId = req.params.id
    await faqService.deleteFaq(removeId)
    res.status(StatusCodes.OK).json({ messages: [] });
  }

  const getAll = async () => {
    const { data, meta } = await faqService.getAllFaqs()
    res.status(StatusCodes.OK).json({
      messages: [],
      data,
      meta: {
        ...meta,
        size: data.length
      },
    })
  }

  return {
    create,
    getAll,
    remove,
    update
  }
}

module.exports = {
  create (req, res) {
    return controllers(req, res).create()
  },
  getAll (req, res) {
    return controllers(req, res).getAll()
  },
  remove (req, res) {
    return controllers(req, res).remove()
  },
  update (req, res) {
    return controllers(req, res).remove()
  }
}
