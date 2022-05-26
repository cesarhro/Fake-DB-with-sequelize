'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payment_Types', 
  [
    {
      id: 1,
      title: 'CASH PAYMENT'
    },
    {
      id: 2,
      title: 'PIX'
    },
    {
      id: 3,
      title: 'DEBIT CARD'
    },
    {
      id: 4,
      title: 'CREDIT CARD'
    },
    {
      id: 5,
      title: 'TED'
    },
    {
      id: 6,
      title: 'DOC'
    },
    {
      id: 7,
      title: 'BANK BILLET'
    }
  ], 
  {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payment_Types', {id: {[Sequelize.Op.in]: [1, 2, 3, 4, 5, 6, 7]}});
  }
};
