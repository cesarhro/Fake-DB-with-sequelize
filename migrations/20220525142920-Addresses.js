'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface .createTable('Addresses', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      zipcode:{
          type: Sequelize.STRING(15),
          allowNull: false
      },
      street:{
          type: Sequelize.STRING(150),
          allowNull: false
      },
      number:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      neighborhood:{
          type: Sequelize.STRING(150),
          allowNull: false
      },
      city:{
          type: Sequelize.STRING(150),
          allowNull: false
      },
      state:{
          type: Sequelize.STRING(150),
          allowNull: false
      },
      country:{
          type: Sequelize.STRING(150),
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
    await queryInterface.dropTable('Addresses');
  }
};
