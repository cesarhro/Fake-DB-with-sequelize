'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id:{
        type: Sequelize.INTEGER,
        autoIncremente: true,
        primaryKey: true
      },
      client_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      service_:{
        type: Sequelize.ENUM('remodeling','coating','recovery', 'confection'),
        allowNull: false
      },
      description:{
        type: Sequelize.STRING(150),
        allowNull: false
      },
      amount_itens:{
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      procedure_id:{
        type: Sequelize.UUID,
        allowNull: false
      },  
      payment_id:{
        type: Sequelize.UUID,
        allowNull: false
      },
      status:{
        type: Sequelize.ENUM('concluded','in progress'),
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
    await queryInterface.dropTable('Orders');
  }
};
