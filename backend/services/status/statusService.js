const db = require('../db');
const helper = require('../../helper');
const config = require('../../config');
const CustomError = require('../../errors')
const {
  validateCreate,
  validateUpdate,
  validateStatus,
  validateMachineName
} = require('./validatorsStatus')


const create = async (status) => {
  validateCreate(status);
  const result = await db.query(
    'INSERT INTO STATUS (status, machine) VALUES ($1, $2) RETURNING *',
    [status.status.toString().toUpperCase(), status.machine]
  )
  if(result.length === 0){
    throw new CustomError.InternalServerError('Error when submitting status to db')
  }
}

const update = async (updateObject) => {
  validateUpdate(updateObject)
  const updatedStatus = await db.query(
    'UPDATE STATUS SET status = $1 WHERE id = $2 RETURNING *',
    [updateObject.status.toString().toUpperCase(), updateObject.id]
  )
  if(updatedStatus.length === 0){
    throw new CustomError.BadRequestError('Please provide a valid id')
  }
}

const deleteSt = async (deleteId) => {
  if(!deleteId){
    throw new CustomError.BadRequestError('Please provide id')
  }
  const deletedStatus = await db.query(
    'DELETE FROM STATUS WHERE id = $1 RETURNING *',
    [deleteId]
  )   
  // console.log('STATUS DELETADO:', deletedStatus)
  if(deletedStatus.length === 0){
    throw new CustomError.BadRequestError('Please provide a valid id')
  }
}

const getMultiple = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, machine, status FROM STATUS OFFSET $1 LIMIT $2', 
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
  getMultiple,
  create,
  update,
  deleteSt
}
