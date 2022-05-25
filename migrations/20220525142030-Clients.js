'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      full_name:{
          type: Sequelize.STRING(200),
          allowNull: false
      },
      email:{
          type: Sequelize.STRING(100),
          allowNull: false
      },
      doc_type_id:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      doc_number:{
          type: Sequelize.STRING(30),
          allowNull: false
      },
      address_id:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      birth_date:{
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      phone:{
          type: Sequelize.BIGINT,
          allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');

  }
};
