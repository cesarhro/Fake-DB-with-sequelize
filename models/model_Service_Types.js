'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Service_Types = sequelize.define('Service_Types', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        service:{
            field: 'service',
            type: Sequelize.STRING(50),
            allowNull: false
        },
        line_id:{
            field: 'line_id',
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tablename: 'Service_Types'
    })
    
    /* Service_Type.associate = function (models) {
        //fazer os imports aqui
    } */

    return Service_Types
}