module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define('Machine', {
    name: DataTypes.STRING,
    cpu: DataTypes.STRING,
    memory: DataTypes.STRING,
    os: DataTypes.STRING,
    location: DataTypes.STRING,
    usedBy: DataTypes.STRING,
    configuration: DataTypes.STRING,
    comment: DataTypes.TEXT
  })
  return Machine
}
