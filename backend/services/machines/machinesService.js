const db = require('../db');
const helper = require('../../utils/pageHelper');
const config = require('../../config');
const CustomError = require('../../errors')
const validateMachine = require('./validatorsMachines')
const Handler = require('../../errors/error-handlers')

const { 
  updateHelper,
  insertHelper,
  deleteHelper,
  selectPageHelper
} = require('../../utils/queryHelper')

const tableName = 'MACHINES'

const errors = require('../../errors/error-messages.json').machines


const createMachine = async (machine) => {
  validateMachine(machine);
  try{
    await insertHelper({ name: machine.name, status: machine.status }, tableName)
  }
  catch(error){
    throw Handler.alreadyExistsError(error)
  }
}

const updateMachine = async (machine) => {
  validateMachine(machine)
  const updateObject = {
    status: machine.status.toString().toUpperCase(),
    name: machine.name
  }
  try{
    const updatedMachine = await updateHelper(updateObject, machine.id, tableName)
  }
  catch(error){
    throw Handler.alreadyExistsError(error)
  }
}

const deleteMachine = async (deleteId) => {
  try {
    const [result]= await deleteHelper({ id: deleteId }, tableName)
    if(!result) {
      const err = new Error()
      err.code = '22P02'
      throw err
    }
  }
  catch(error){
    throw Handler.idError(error, deleteId)
  }
}

const getMultipleMachines = async (page = 1) => {
  try{
    const selectArray = ['id', 'status', 'name']
    const rows = await selectPageHelper(selectArray, page, tableName)
    const data = helper.emptyOrRows(rows); // acho que tenho que tirar isso
    const meta = {page};
    return {
      data,
      meta
    }
  }
  catch(error){
    throw Handler.pageError(error, page)
  }
}

module.exports = {
  getMultipleMachines,
  createMachine,
  updateMachine,
  deleteMachine
}
