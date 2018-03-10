const {
  Reservation,
  Machine
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {machineId} = req.query
      const where = {
        UserId: userId
      }
      if (machineId) {
        where.MachineId = machineId
      }
      const reservations = await Reservation.findAll({
        where: where,
        include: [
          {
            model: Machine
          }
        ]
      })
        .map(reservation => reservation.toJSON())
        .map(reservation => _.extend(
          {},
          reservation.Machine,
          reservation
        ))
      res.send(reservations)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to fetch the reservation'
      })
    }
  }
}
