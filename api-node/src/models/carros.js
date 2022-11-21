'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carros extends Model {
    
    static associate(models) {
      Carros.hasMany(models.Vendas,{
        foreignKey: 'carro_id'
      });
    }
  }
  Carros.init({
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carros',
    paranoid: true
  });
  return Carros;
};