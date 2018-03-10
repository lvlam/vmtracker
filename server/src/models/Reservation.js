module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {})

  Reservation.associate = function (models) {
    Reservation.belongsTo(models.User)
    Reservation.belongsTo(models.Machine)
  }

  return Reservation
}
