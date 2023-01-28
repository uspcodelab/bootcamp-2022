
const db = require('../services/db')
const CustomError = require('../errors')
const { getOffset } = require('./pageHelper')
const config = require('../config')

const updateHelper = async (queryObject, id, tableName) => {
  const keys = Object.keys(queryObject)
  const values = Object.values(queryObject)
  const args = values.map((_, i) => keys[i] + ' = $' + (i + 1)).join()
  return await db.query(
    `UPDATE ${tableName} SET ${args} WHERE id = ${'$' + (values.length + 1)} RETURNING *`,
    [...values, id]
  )
}

const insertHelper = async (queryObject, tableName) => {
  const keys = Object.keys(queryObject)
  const values = Object.values(queryObject)
  const args = values.map((_, i) => '$' + (i + 1)).join()
  return await db.query(
    `INSERT INTO ${tableName} (${keys.join()}) VALUES (${args}) RETURNING *`,
    values
  )
}

const checkExistanceHelper = async (queryObject, tableName) => { 
  const keys = Object.keys(queryObject)
  const values = Object.values(queryObject)
  const args = values.map((_, i) => keys[i] + ' = $' + (i + 1)).join(' OR ')
  return await db.query(
    `SELECT ${keys.join()} FROM ${tableName} WHERE ${args}`,
    values
  )
}

const deleteHelper = async (queryObject, tableName) => {
  const keys = Object.keys(queryObject)
  const values = Object.values(queryObject)
  const args = values.map((_, i) => keys[i] + ' = $' + (i + 1)).join()
  return await db.query(
    `DELETE FROM ${tableName} WHERE ${args} RETURNING *`,
    values
  )
}

const selectPageHelper = async (queryArray, page, tableName, listPerPage=config.listPerPage) => {
  const offset = getOffset(page, listPerPage);
  return await db.query(
    `SELECT ${queryArray.join()} FROM ${tableName} OFFSET $1 LIMIT $2`, 
    [offset, listPerPage]
  )
}

const selectOneHelper = async (queryArray, queryObject, tableName) => {
  const keys = Object.keys(queryObject)
  const values = Object.values(queryObject)
  const args = values.map((_, i) => keys[i] + ' = $' + (i + 1)).join()
  return await db.query(
    `SELECT ${queryArray.join()} FROM ${tableName} WHERE ${args}`,
    values
  )
}

module.exports = {
  insertHelper,
  updateHelper,
  deleteHelper,
  selectPageHelper,
  selectOneHelper,
  checkExistanceHelper
} 
