'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Payment_Types = sequelize.define('Payment_Types', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title:{
            field: 'title',
            type: Sequelize.STRING(50),
            allowNull: false
        }    
    },
    {
        tablename: 'Payment_Types'
    })
    
    /* Line_Types.associate = function (models) {
        //fazer os imports aqui
    } */

    return Payment_Types
}