const { User } = require('../models')

const userdata = [
    {
        username: 'Zach1105',
        email: 'zach1105@me.com',
        password: 'Password1234',
    },
    {
        username: 'NickTLewis',
        email: 'ntlewis@me.com',
        password: 'password1111',
    },
    {
        username: 'JohnDoe36',
        email: 'johnnyboy@me.com',
        password: 'password987',
    },
    {
        username: 'SammyLuvzCars',
        email: 'sam1997@sammy.com',
        password: 'abc123',
    },
    {
        username: 'GearHead2',
        email: 'jane92@me.com',
        password: 'pword003',
    },
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;