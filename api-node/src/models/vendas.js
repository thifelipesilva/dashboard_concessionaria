'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    
    static associate(models) {
      Vendas.belongsTo(models.Vendedores, {
        foreignKey: 'vendedor_id'
      });
      Vendas.belongsTo(models.Carros, {
        foreignKey: 'carro_id'
      });
    }
  }
  Vendas.init({
    data_venda: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Data inválida'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Vendas',
    paranoid: true
  });
  return Vendas;
};