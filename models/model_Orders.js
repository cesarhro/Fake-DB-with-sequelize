'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        id:{
            field: 'id',
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        client_id:{
            field: 'client_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        service_id:{
            field: 'service_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        line_id:{
            field: 'line_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        description:{
            field: 'description',
            type: Sequelize.STRING(150),
            allowNull: false
        },
        amount_itens:{
            field: 'amount_itens',
            type: Sequelize.INTEGER, 
            allowNull: false
        },
        procedure_id:{
            field: 'procedure_id',
            type: Sequelize.UUIDV4,
            allowNull: false
        },  
        payment_id:{
            field: 'payment_id',
            type: Sequelize.UUIDV4,
            allowNull: false
        },
        status:{
            field: 'status',
            type: Sequelize.ENUM('concluded','in progress'),
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
        tablename: 'Orders'
    })
    
    /* Orders.associate = function (models) {
        //fazer os imports aqui
    } */

    return Orders
}