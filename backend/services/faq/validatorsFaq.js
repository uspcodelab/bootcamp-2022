
module.exports = (req) => {

  // errors
  const errors = require('../../errors/error_messages')(req).faq
  const CustomError = require('../../errors/custom_errors')

  const validateQuestion = (messages, question) => {
    if (!question){
      messages.push(errors.question.undef);
    }
    else if(typeof question !== 'string') {
      messages.push(errors.question.str);
    }
    else if(question.length > 256){
      messages.push(errors.question.len)
    }
  }

  const validateAnswer= (messages, answer) => {
    if (!answer){
      messages.push(errors.answer.undef);
    }
    else if(typeof answer !== 'string') {
      messages.push(errors.answer.str);
    }
  }

  const validateFaq = (faq) => {
    const messages = [];
    if (!faq) {
      messages.push(errors.faq);
    }
    validateQuestion(messages, faq.question)
    validateAnswer(messages, faq.answer)
    if (messages.length > 0) {
      throw new CustomError.BadRequestError(messages);
    }
  }

  return validateFaq

}
