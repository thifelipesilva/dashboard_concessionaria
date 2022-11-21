const { Router } = require('express');
const VendasController = require('../controller/VendasController');
const router = new Router();

router
    .get('/vendas', VendasController.mostraTodasAsVendas)
    .get('/vendas/:id', VendasController.mostraVendasPorId)
    .post('/vendas', VendasController.registraVenda)
    .put('/vendas/:id', VendasController.atualizaVenda)
    .delete('/vendas/:id', VendasController.deletaVenda)

module.exports = router;