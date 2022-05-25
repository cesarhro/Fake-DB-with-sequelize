'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      full_name:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      department_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      function_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hire_date:{
        type: Sequelize.DATE,
        allowNull: false
      },
      exit_date:{
        type: Sequelize.DATE, 
        allowNull: true
      },
      status:{
        type: Sequelize.ENUM('active','fired'),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};
