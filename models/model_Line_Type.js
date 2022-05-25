'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Line_Type = sequelize.define('Line_Type', {
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
        tablename: 'Line_Type'
    })
    
    /* Line_Type.associate = function (models) {
        //fazer os imports aqui
    } */

    return Line_Type
}