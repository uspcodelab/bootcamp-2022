
// errors
const CustomError = require('../errors/custom_errors')

// default configs
const config = require('../config');

// db stuff
const { Pool } = require('pg');
const pool = new Pool(config.db);

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
  catch(error) {
    if(config.NODE_ENV === 'development'){
      console.log(error)
    }
    if(error.code === 'EAI_AGAIN'){
      throw new CustomError.InternalServerError('Error when requesting to db. Please, check if db is working properly')
    }
    else{
      throw error
    }
  }
}

module.exports = {
  query
}
