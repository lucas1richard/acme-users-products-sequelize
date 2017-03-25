module.exports = (sequelize, DataTypes) => {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
