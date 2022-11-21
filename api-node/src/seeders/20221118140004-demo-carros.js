'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Carros', [
      {
        nome: 'Fusca',
        marca: 'wolksvagen',
        valor: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Corsa',
        marca: 'Fiat',
        valor: 20000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Santa Fé',
        marca: 'hiunday',
        valor: 80000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'uno way',
        marca: 'Fiat',
        valor: 35000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Carros', null, {});
     
  }
};
