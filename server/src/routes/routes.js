const MachinesController = require('../controllers/MachinesController')
const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.get('/machines',
    MachinesController.index),
  app.post('/machines',
    MachinesController.create),
  app.get('/machines/:machineId',
    MachinesController.show)
}
