'use strict'
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Document_Types = sequelize.define('Document_Types', {
        id:{
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        document:{
            field: 'document',
            type: Sequelize.STRING(30),
            allowNull: false
        }    
    },
    {
        tablename: 'Document_Types'
    })
    
    /* Line_Type.associate = function (models) {
        //fazer os imports aqui
    } */

    return Document_Types
}