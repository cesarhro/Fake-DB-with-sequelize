'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Departments', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      departament:{
        type: Sequelize.STRING(30),
        allowNull: false
      },
      characters:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Departments');
  }
};
