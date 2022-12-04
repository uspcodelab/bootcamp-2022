const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
 const offset = helper.getOffset(page, config.listPerPage);
 const rows = await db.query(
  'SELECT HORARIOS.id, HORARIOS.weekday, start_time, end_time, admin_id FROM HORARIOS, ADMIN WHERE HORARIOS.admin_id = ADMIN.id OFFSET $1 LIMIT $2', 
  [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
};
