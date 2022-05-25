'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define('Employees', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        full_name:{
            field: 'full_name',
            type: Sequelize.STRING(200),
            allowNull: false
        },
        department_id:{
            field: 'department_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        function_id:{
            field: 'function_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        hire_date:{
            field: 'hire_date',
            type: Sequelize.DATE,
            allowNull: false
        },
        exit_date:{
            field: 'exit_date',
            type: Sequelize.DATE, 
            allowNull: true
        },
        status:{
            field: 'status',
            type: Sequelize.ENUM('active','fired'),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tablename: 'Employees'
    })
    
    /* Employees.associate = function (models) {
        //fazer os imports aqui
    } */

    return Employees
}