'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Procedure_Types', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      procedure:{
        type: Sequelize.STRING(50),
        allowNull: false
      }    
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Procedure_Types');
    
  }
};
