'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define('Payments', {
        id:{
            field: 'id',
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        order_id:{
            field: 'order_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        value:{
            field: 'value',
            type: Sequelize.BIGINT,
            allowNull: false
        },
        client_id:{
            field: 'client_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        payment_type_id:{
            field: 'payment_type_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status:{
            field: 'status',
            type: Sequelize.ENUM('in process','accepted','denied'), 
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
        tablename: 'Payment'
    })
    
    /* Payments.associate = function (models) {
        //fazer os imports aqui
    } */

    return Payments
}