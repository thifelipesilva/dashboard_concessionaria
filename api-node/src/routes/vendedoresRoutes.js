const { Router } = require('express');
const VendedoresController = require('../controller/VendedoresController');

const router = Router();

router
    .get('/vendedores', VendedoresController.mostraTodosVendedores)
    .get('/vendedores/:id', VendedoresController.mostraVendedorPorId)
    .post('/vendedores', VendedoresController.criaVendedor)
    .put('/vendedores/:id', VendedoresController.atualizaVendedor)
    .delete('/vendedores/:id', VendedoresController.deletaVendedor)

    .post('/vendedores/:id/restaura', VendedoresController.restauraVendedor)
    
module.exports = router;