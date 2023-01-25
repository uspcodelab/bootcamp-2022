
const db = require('../db')
const helper = require('../../helper');
const config = require('../../config');
const bcrypt = require('bcrypt')
const errors = require('../../errors')
const validateUser = require('./validatorsUser')

const hashPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(plainPassword, salt)
}

const genCreateQuery = (user) => {
  const keys = Object.keys(user)
  const values = Object.values(user)
  const args = values.map((_, i) => '$' + (i + 1).toString()).join()
  return `
    INSERT INTO USUARIOS (${keys.join()}) VALUES (${args}) RETURNING *
  `
}

const getMultiple = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, username, mail, shell, user_group, ssh_access, link_type, institute, last_login, password FROM USUARIOS OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  // console.log(rows)
  const data = helper.emptyOrRows(rows);
  const meta = {page};
  return {
    data,
    meta
  }
}

const create = async (user) => {
  // username, password, mail, shell, user_group, ssh_access, link_type, institute
  validateUser(user)
  user.password = await hashPassword(user.password)
  const query = genCreateQuery(user)
  const result = await db.query(query, [...Object.values(user)])
  if(result.length === 0){
    throw new CustomError.InternalServerError('Error when submitting user to db')
  }
}

module.exports = {
  create,
  getMultiple
}
