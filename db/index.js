const sequelize = require('./_conn');

const Users = sequelize.import('./models/Users');
const Products = sequelize.import('./models/Products');

const seed = () => {
  return sequelize.sync({ force: true })
    .then(() => Users.bulkCreate([
      { name: 'Tarzan' },
      { name: 'Leah' },
      { name: 'Anikan' },
      { name: 'Belle' }
    ]))
    .then(() => Products.bulkCreate([
      { name: 'Laptop' },
      { name: 'Lampshade' },
      { name: 'Laser' }
    ]));
};

module.exports = {
  seed,
  sync: sequelize.sync,
  models: {
    Users,
    Products
  }
};
