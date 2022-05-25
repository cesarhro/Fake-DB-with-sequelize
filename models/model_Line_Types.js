'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Line_Types = sequelize.define('Line_Types', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        line:{
            field: 'line',
            type: Sequelize.STRING(50),
            allowNull: false
        }    
    },
    {
        tablename: 'Line_Types'
    })
    
    /* Line_Types.associate = function (models) {
        //fazer os imports aqui
    } */

    return Line_Types
}