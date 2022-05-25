'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Departments = sequelize.define('Departments', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        departament:{
            field: 'department',
            type: Sequelize.STRING(30),
            allowNull: false
        }    
    },
    {
        tablename: 'Departments'
    })
    
    /* Departments.associate = function (models) {
        //fazer os imports aqui
    } */

    return Departments
}