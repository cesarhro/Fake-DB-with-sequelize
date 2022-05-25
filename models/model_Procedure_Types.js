'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Procedure_Types = sequelize.define('Procedure_Types', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        procedure:{
            field: 'procedure',
            type: Sequelize.STRING(50),
            allowNull: false
        }    
    },
    {
        tablename: 'Procedure_Types'
    })
    
    /* Line_Type.associate = function (models) {
        //fazer os imports aqui
    } */

    return Procedure_Types
}