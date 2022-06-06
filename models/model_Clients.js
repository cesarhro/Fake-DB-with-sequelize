'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Clients = sequelize.define('Clients', {
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
        email:{
            field: 'email',
            type: Sequelize.STRING(100),
            allowNull: false
        },
        doc_type_id:{
            field: 'doc_type_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        doc_number:{
            field: 'doc_number',
            type: Sequelize.STRING(30),
            allowNull: false
        },
        address_id:{
            field: 'address_id',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        birth_date:{
            field: 'birth_date',
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        phone:{
            field: 'phone',
            type: Sequelize.BIGINT,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tablename: 'Clients'
    })
    
    /* Clients.associate = function (models) {
        //fazer os imports aqui
    } */

    return Clients
}