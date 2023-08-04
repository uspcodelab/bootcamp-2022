
module.exports = (req) => {
  let language = req.headers["Accept-Language"]
  let errors
  if(language === 'pt-BR') {
    errors = require('./pt-BR')
  }
  else {
    errors = require('./en-US')
    language = 'en-US'
  }
  return errors
}
