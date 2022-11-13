const { Cars } = require('../models');

const carsdata = [
  {
    make: 'Audi',
    model: 'S4',
    year: '2014',
    user_id: 1,
  },
  {
    make: 'Volkswagen',
    model: 'GTI',
    year: '2012',
    user_id: 1,
  },
  {
    make: 'Toyota',
    model: 'Land Cruiser',
    year: '2004',
    user_id: 1,
  },
  {
    make: 'BMW',
    model: 'M3',
    year: '2016',
    user_id: 2,
  },
  {
    make: 'Audi',
    model: 'RS5',
    year: '2021',
    user_id: 2,
  },
  {
    make: 'Acura',
    model: 'NSX',
    year: '1999',
    user_id: 3,
  },
  {
    make: 'Ford',
    model: 'F-150',
    year: '2015',
    user_id: 3,
  },
  {
    make: 'Porsche',
    model: '996 Turbo',
    year: '2003',
    user_id: 4,
  },
  {
    make: 'Land Rover',
    model: 'Defender',
    year: '2001',
    user_id: 5,
  },
];

const seedCars = () => Cars.bulkCreate(carsdata);

module.exports = seedCars;
