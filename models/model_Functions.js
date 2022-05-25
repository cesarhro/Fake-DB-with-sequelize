'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Functions = sequelize.define('Functions', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        function:{
            field: 'function',
            type: Sequelize.STRING(30),
            allowNull: false
        }    
    },
    {
        tablename: 'Functions'
    })
    
    /* Line_Type.associate = function (models) {
        //fazer os imports aqui
    } */

    return Functions
}