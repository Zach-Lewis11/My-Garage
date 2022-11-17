const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedCars = require('./carsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedCars();

  process.exit(0);
};

seedAll();
