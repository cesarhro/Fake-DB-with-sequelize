'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Departament_Types = sequelize.define('Departament_Types', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        departament:{
            field: 'departamet',
            type: Sequelize.STRING(30),
            allowNull: false
        }    
    },
    {
        tablename: 'Departament_Types'
    })
    
    /* Line_Type.associate = function (models) {
        //fazer os imports aqui
    } */

    return Departament_Types
}