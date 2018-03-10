const {Machine} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let machines = null
      const search = req.query.search
      if (search) {
        machines = await Machine.findAll({
          where: {
            $or: [
              'name', 'os', 'ram', 'cpu', 'hdSize', 'location'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
          machines = await Machine.findAll({
          limit: 20
        })
      }
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
      res.send(machine)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch a machine'
      })
    }
  },
  async put (req, res) {
    try {
      await Machine.update(req.body, {
        where: {
          id: req.params.machineId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the machine'
      })
    }
  }
}
