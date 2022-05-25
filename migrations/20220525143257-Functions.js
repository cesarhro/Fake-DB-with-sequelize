'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Functions', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      function:{
        type: Sequelize.STRING(30),
        allowNull: false
      }    
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Functions');
  }
};
