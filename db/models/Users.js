module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
