const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
 const offset = helper.getOffset(page, config.listPerPage);
 const rows = await db.query(
    'SELECT AVISOS.id, AVISOS.title, content, icon, color FROM AVISOS, AVISOS_CATEGORIA WHERE AVISOS.category_id = AVISOS_CATEGORIA.id OFFSET $1 LIMIT $2', 
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
