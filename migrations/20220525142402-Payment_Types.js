'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Payment_Types', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      title:{
        type: Sequelize.STRING(50),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Payment_Types');
  }
};
