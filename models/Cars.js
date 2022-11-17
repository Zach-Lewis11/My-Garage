const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const user = require('./User')

class Cars extends Model{}

Cars.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: false,
        modelName: 'car',
    }
);

module.exports = Cars;