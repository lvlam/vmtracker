const MachinesController = require('../controllers/MachinesController')

module.exports = (app) => {
  app.get('/machines',
    MachinesController.index),
  app.post('/machines',
    MachinesController.create),
  app.get('/machines/:machineId',
    MachinesController.show)
}
