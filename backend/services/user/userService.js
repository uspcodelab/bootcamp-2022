
const db = require('../db')
const helper = require('../../helper');
const config = require('../../config');

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

module.exports = {
  getMultiple
}
