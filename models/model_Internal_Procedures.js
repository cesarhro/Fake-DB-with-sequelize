'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Internal_Procedures = sequelize.define('Internal_Procedures', {
        id:{
            field: 'id',
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        order_id:{
            field: 'order_id',
            type: Sequelize.UUIDV4,
            allowNull: false
        },
        procedure_type_id:{
            field: 'procedure_type_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        dept_id:{
            field: 'dept_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        employee_id:{
            field: 'employee_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status:{
            field: 'status',
            type: Sequelize.ENUM('in progress','complete','canceled'), 
            allowNull: false
        },
        created_at:{
            field: 'created_at',
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_at:{
            field: 'updated_at',
            type: Sequelize.DATE,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tablename: 'Internal_Procedures'
    })
    
    /* Internal_Procedures.associate = function (models) {
        //fazer os imports aqui
    } */

    return Internal_Procedures
}