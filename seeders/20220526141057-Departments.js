'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', 
    [
      {
        id: 1,
        department: 'Administrative'
      },
      {
        id: 2,
        department: 'Financial'
      },
      {
        id: 3,
        department: 'Human Resources'
      },
      {
        id: 4,
        department: 'Commercial sector'
      },
      {
        id: 5,  
        department: 'Operational sector'
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments',  {id: {[Sequelize.Op.in]: [1, 2, 3, 4, 5]}});
  }
};
