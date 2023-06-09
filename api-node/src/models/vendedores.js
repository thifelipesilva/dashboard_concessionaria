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
    nome: {
      type: DataTypes.STRING,
      validate: {
        validador: dados => {
          if (dados.length < 3) throw new Error('Nome deve ter mais de três letras')
        },
        notEmpty: {
          args: true,
          msg: 'Campo nome não pode ser vazio'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato do email inválido'
        },
        notEmpty: {
          args: true,
          msg: 'Campo e-mail não pode ser vazio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Vendedores',
    paranoid: true
  });
  return Vendedores;
};