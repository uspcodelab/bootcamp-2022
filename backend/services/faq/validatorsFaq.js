
const CustomError = require('../../errors')
const errors = require('../../errors/error-messages.json').faq

const validateQuestion = (messages, question) => {
  if (!question){
    messages.push(errors.question.undef);
  }
  else if(typeof question !== 'string') {
    messages.push(errors.question.str);
  }
  else if(question.length > 30){
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
  else if(answer.length > 30){
    messages.push(errors.answer.len)
  }
}

const validateFaq = (faq) => {
  const messages = [];

  if (!faq) {
    messages.push(errors.faq);
  }

  validateQuestion(messages, faq.status)
  validateAnswer(messages, faq.answer)

  if (messages.length > 0) {
    throw new CustomError.BadRequestError(messages);
  }
}

module.exports = validateFaq 
