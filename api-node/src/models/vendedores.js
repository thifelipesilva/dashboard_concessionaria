'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendedores extends Model {
 
    static associate(models) {
      Vendedores.hasMany(models.Vendas, {
        foreignKey: 'vendedor_id'
      });
    }
  }
  Vendedores.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendedores',
    paranoid: true
  });
  return Vendedores;
};