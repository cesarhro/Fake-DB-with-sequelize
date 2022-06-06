'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncremente: true
        },
        client_id:{
            field: 'client_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        service_:{
            field: 'service_',
            type: Sequelize.ENUM('remodeling','coating','recovery', 'confection'),
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