'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Line_Types', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
    line:{
        type: Sequelize.STRING(50),
        allowNull: false
      }    
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Line_Types');

  }
};
