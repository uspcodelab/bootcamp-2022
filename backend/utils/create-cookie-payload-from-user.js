
const createCookiePayloadFromUser = (user) => ({
  id: user.id,
  name: user.name,
  username: user.username,
})

module.exports = createCookiePayloadFromUser
