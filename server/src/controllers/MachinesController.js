const {Machine} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const machines = await Machine.findAll({
        limit: 20
      })
      res.send(machines)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch machines'
      })
    }
  },
  async create (req, res) {
    try {
      const machine = await Machine.create(req.body)
      res.send(machine)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to add a machine'
      })
    }
  },
  async show (req, res) {
    try {
      const machine = await Machine.findById(req.params.machineId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch a machine'
      })
    }
  }

}
