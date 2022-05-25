'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Internal_Procedures', {
      id:{
        type: Sequelize.UUID,
        primaryKey: true
      },
      order_id:{
        type: Sequelize.UUID,
        allowNull: false
      },
      procedure_type_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      department_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      employee_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status:{
        type: Sequelize.ENUM('in progress','complete','canceled'), 
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Internal_Procedures');
  }
};
