'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Document_Types', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      document:{
        type: Sequelize.STRING(30),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Document_Types');
  }
};
