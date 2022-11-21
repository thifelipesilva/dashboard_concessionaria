'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_venda: {
        type: Sequelize.DATEONLY
      },
      vendedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Vendedores', key: 'id'}
      },
      carro_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Carros', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendas');
  }
};