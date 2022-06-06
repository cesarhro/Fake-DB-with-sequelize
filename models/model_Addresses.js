'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Addresses = sequelize.define('Addresses', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        zipcode:{
            field: 'zipcode',
            type: Sequelize.STRING(15),
            allowNull: false
        },
        street:{
            field: 'street',
            type: Sequelize.STRING(150),
            allowNull: false
        },
        number:{
            field: 'number',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        neighborhood:{
            field: 'neighborhood',
            type: Sequelize.STRING(150),
            allowNull: false
        },
        city:{
            field: 'city',
            type: Sequelize.STRING(150),
            allowNull: false
        },
        state:{
            field: 'state',
            type: Sequelize.STRING(150),
            allowNull: false
        },
        country:{
            field: 'country',
            type: Sequelize.STRING(150),
            allowNull: false
        },
        created_at:{
            field: 'created_at',
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_at:{
            field: 'updated_at',
            type: Sequelize.DATE,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tablename: 'Addresses'
    })
    
    /* Addresses.associate = function (models) {
        //fazer os imports aqui
    } */

    return Addresses
}