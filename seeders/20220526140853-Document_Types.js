'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Document_Types', 
    [
      {
        id: 1,
        document: 'CPF',
        characters: 11
      },
      {
        id: 2,
        document: 'RG',
        characters: 7
      },
      {
        id: 3,
        document: 'CNH',
        characters: 11
      },
      {
        id: 4,
        document: 'PASSPORT',
        characters: 8
      },
      {
        id: 5,
        document: 'CNPJ',
        characters: 14
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Document_Types', {id: {[Sequelize.Op.in]: [1, 2, 3, 4, 5]}});
  }
};
