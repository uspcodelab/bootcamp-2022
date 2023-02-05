
module.exports = (req) => {
  if(!req){
    return require('./en-us')
  }
  if(req.headers["accept-language"] == 'bla') {
    return require('./pt-br')
  }
  else {
    return require('./en-us')
  }
}
