const express = require('express');

const vendedores = require('./vendedoresRoutes');
const carros = require('./carrosRoute');
const vendas = require('./vendasRoute');
const usuarios = require('./usuariosRoute');

module.exports = app => {
    app.use(
        express.json(),
        vendedores,
        carros, 
        vendas,
        usuarios
    );
};