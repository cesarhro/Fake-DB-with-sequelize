'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Service_Types = sequelize.define('Service_Typess', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        service:{
            field: 'service',
            type: Sequelize.STRING(50),
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