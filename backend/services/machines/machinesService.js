const db = require('../db');
const helper = require('../../utils/pageHelper');
const config = require('../../config');
const CustomError = require('../../errors')
const validateMachine = require('./validatorsMachines')

const { 
  updateHelper,
  insertHelper,
  checkExistanceHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'MACHINES'

const errors = require('../../errors/error-messages.json').machines


const createMachine = async (machine) => {
  validateMachine(machine);
  const result = await checkExistanceHelper({ name: machine.name }, tableName)
  if(result.length > 0) {
    throw new CustomError.BadRequestError(errors.exists)
  }
  await insertHelper({ name: machine.name, status: machine.status }, tableName)
}

const updateMachine = async (machine) => {
  validateMachine(machine)
  const updateObject = {
    status: machine.status.toString().toUpperCase(),
    name: machine.name
  }
  const updatedMachine = await updateHelper(updateObject, machine.id, tableName)
  // console.log(updatedMachine)
}

const deleteMachine = async (deleteId) => {
  if(!deleteId){
    throw new CustomError.BadRequestError('Please provide id')
  }
  const deletedMachine = await deleteHelper({ id: deleteId }, tableName)
  if(deletedMachine.length === 0){
    throw new CustomError.BadRequestError(errors.notFound)
  }
}

const getMultipleMachines = async (page = 1) => {
  const selectArray = ['id', 'status', 'name']
  const rows = await selectPageHelper(selectArray, page, tableName)
  const data = helper.emptyOrRows(rows); // acho que tenho que tirar isso
  const meta = {page};
  return {
    data,
    meta
  }
}

module.exports = {
  getMultipleMachines,
  createMachine,
  updateMachine,
  deleteMachine
}
