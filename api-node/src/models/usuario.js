'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
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
    },
    senha: {
      type: DataTypes.STRING,
      validate: {
        validador: dados => {
          if (dados.length < 5) throw new Error('Senha deve ter mais de três letras')
        },
        notEmpty: {
          args: true,
          msg: 'Campo senha não pode ser vazio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};