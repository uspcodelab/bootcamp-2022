
const createCookiePayloadFromUser = (user) => ({
  id: user.id,
  name: user.name,
  username: user.username,
  role: user.role
})

module.exports = createCookiePayloadFromUser
