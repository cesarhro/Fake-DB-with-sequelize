'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id:{
        type: Sequelize.UUID,
        primaryKey: true
      },
      order_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      value:{
        type: Sequelize.BIGINT,
        allowNull: false
      },
      client_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      payment_type_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status:{
        type: Sequelize.ENUM('in process','accepted','denied'), 
        allowNull: false
      },
      transaction_id: {
        type: Sequelize.UUID,
        allowNull: true
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
    await queryInterface.dropTable('Payments');
  }
};
