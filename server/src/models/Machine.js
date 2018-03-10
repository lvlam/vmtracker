module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define('Machine', {
    name: DataTypes.STRING,
    cpu: DataTypes.STRING,
    ram: DataTypes.STRING,
    os: DataTypes.STRING,
    hdSize: DataTypes.STRING,
    location: DataTypes.STRING
  })

  Machine.associate = function(models) {
  }
  return Machine
}
