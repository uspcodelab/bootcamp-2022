const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// gets from db (used bu get method)
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
   // 'SELECT id, quote, author FROM quote OFFSET $1 LIMIT $2', 
    'SELECT id, machine, status FROM STATUS OFFSET $1 LIMIT $2',
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

// checks if what is to be put in db is in the right format
function validateCreate(machine_status) {
  let messages = [];

  console.log(machine_status);

  if (!machine_status) {
    messages.push('No object is provided');
  }

  if (!machine_status.status) {
    messages.push('Status is empty');
  }

  if (!machine_status.machine) {
    messages.push('No machine name was provided');
  }

  if (
    machine_status.status && 
    machine_status.status != 'true' && 
    machine_status.status != 'false')
  {
    messages.push('Status must be a boolean value (true or false)');
  }

  if (machine_status.machine && machine_status.machine.length > 10) {
    messages.push('Machine name cannot be longer than 10 characters');
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

// puts in db (used by post method)
async function create(machine_status){
  validateCreate(machine_status);

  const result = await db.query(
    'INSERT INTO STATUS(machine, status) VALUES ($1, $2) RETURNING *',
    [machine_status.machine, machine_status.status]
  );

  let message = 'Machine status created successfully';

  if(!result) {

    message = 'Error in posting Machine status to db';

    let error = new Error(message);
    error.statusCode = 400; // maybe i should change this number

    throw error;

  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}
