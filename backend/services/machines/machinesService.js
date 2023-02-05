
module.exports = (req) => {

  // validator
  const validateMachine = require('./validatorsMachines')(req)

  // errors
  const Handler = require('../../errors/error_handlers')(req)

  // helpers
  const { 
    updateHelper,
    insertHelper,
    deleteHelper,
    selectAllHelper
  } = require('../../utils/queryHelper')

  // db
  const tableName = 'MACHINES'

  const createMachine = async (createObject) => {
    validateMachine(createObject);
    try{
      await insertHelper(createObject, tableName)
    }
    catch(error){
      throw Handler.alreadyExistsError(error)
    }
  }

  const updateMachine = async (updateObject) => {
    validateMachine(updateObject)
    try{
      const [result] = await updateHelper(updateObject, tableName)
      if(!result){
        const err = new Error()
        err.code = '22P02'
        throw err
      }
    }
    catch(error){
      error = Handler.idError(error, updateObject.id)
      if(!error.statusCode){
        error = Handler.alreadyExistsError(error)
      }
      throw error
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

  const getAllMachines = async () => {
    const selectArray = ['id', 'status', 'name']
    const data = await selectAllHelper(selectArray, 'MACHINES')
    const meta = {size: data.length}
    return {
      data,
      meta
    }
  }

  return {
    createMachine,
    updateMachine,
    deleteMachine,
    getAllMachines
  }
}