'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Service_Types', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      service:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      line_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Service_Types');
  }
};
