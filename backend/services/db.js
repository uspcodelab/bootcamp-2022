const { Pool } = require('pg');
const config = require('../config');
const pool = new Pool(config.db);
const CustomError = require('../errors')

/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/pooling#single-query
 */
const query = async (query, params) => {
  try {
    const {rows, fields} = await pool.query(query, params);
    return rows;
  }
  catch(err) {
    console.log(err)
    throw new CustomError.InternalServerError('Error when requesting to db. Check if db is receiving requests')
  }
}

module.exports = {
  query
}
