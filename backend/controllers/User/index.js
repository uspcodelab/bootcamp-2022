
const controllers = (req, res) => {

  const { StatusCodes } = require('http-status-codes')

  const usersService = require('../../services/users/usersService')(req)

  const getPage = async () => {
    const {data, meta} = await usersService.getMultipleUsers(req.query.page)
    res.status(StatusCodes.OK).json({
      messages: [],
      data,
      meta: {
        ...meta,
        size: data.length
      }
    })
  }

  const getUser = async () => {
    const id = req.params.id
    const user = await usersService.getUser(id)
    res.status(StatusCodes.OK).json({ 
      messages: [],
      data: user,
    })
  }

  const showMe = async () => {
    const id = req.user.id
    const user = await usersService.getUser(id)
    res.status(StatusCodes.OK).json({ 
      messages: [],
      data: user
    })
  }

  const remove = async () => {
    const id = req.params.id
    await usersService.deleteUser(id)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const updatePassword = async () => {
    const updateObject = {
      id: req.user.id,
      password: req.body.password
    }
    await usersService.updatePasswordUser(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const updateMail = async () => {
    const updateObject = {
      id: req.user.id,
      password: req.body.mail
    }
    await usersService.updatePasswordUser(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  const updateRole = async () => {
    const updateObject = {
      id: req.body.id,
      role: req.body.role
    }
    await usersService.updateRoleUser(updateObject)
    res.status(StatusCodes.OK).json({ messages: [] })
  }

  return {
    getPage,
    showMe,
    getUser,
    remove,
    updatePassword,
    updateMail,
    updateRole
  }
}

module.exports = {
  async getPage (req, res) {
    await controllers(req, res).getPage()
  },
  async showMe (req, res) {
    await controllers(req, res).showMe()
  },
  async getUser (req, res) {
    await controllers(req, res).getUser()
  },
  async remove (req, res) {
    await controllers(req, res).remove()
  },
  async updatePassword (req, res) {
    await controllers(req, res).updatePassword()
  },
  async updateMail (req, res) {
    await controllers(req, res).updateMail()
  },
  async updateRole (req, res) {
    await controllers(req, res).showMe()
  }
}
