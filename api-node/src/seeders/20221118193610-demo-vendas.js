'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vendas', [
      {
        data_venda:'2022-09-02',
        vendedor_id: 1,
        carro_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        data_venda:'2022-09-03',
        vendedor_id: 2,
        carro_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        data_venda:'2022-09-05',
        vendedor_id: 3,
        carro_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        data_venda:'2022-09-07',
        vendedor_id: 2,
        carro_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vendas', null, {});
  }
};
