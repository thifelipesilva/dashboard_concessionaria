'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Vendedores', [
      {
        nome: 'jose carlos',
        email: 'jcjose@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Luiz Gama',
        email: 'lggama@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Vendedores', null, {});
     
  }
};
