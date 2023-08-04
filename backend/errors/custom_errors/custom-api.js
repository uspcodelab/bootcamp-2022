
class CustomAPIError extends Error {
  constructor(messages) {
    super()
    if(!Array.isArray(messages)){
      messages = [ messages ]
    }
    this.messages = messages 
  }
}

module.exports = CustomAPIError
