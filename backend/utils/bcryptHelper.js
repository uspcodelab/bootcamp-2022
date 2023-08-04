
const bcrypt = require('bcrypt')

const bcryptPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(plainPassword, salt)
}

const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword) 
}

module.exports = {
  bcryptPassword,
  comparePasswords
}
