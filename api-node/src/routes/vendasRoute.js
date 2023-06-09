const { Router } = require('express');
const VendasController = require('../controller/VendasController');
const autenticado = require('../middleware/auth/autenticado');
const router = new Router();

router.use(autenticado);
router
    .get('/vendas', VendasController.mostraTodasAsVendas)
    .get('/vendas/:id', VendasController.mostraVendasPorId)
    .post('/vendas', VendasController.registraVenda)
    .put('/vendas/:id', VendasController.atualizaVenda)
    .delete('/vendas/:id', VendasController.deletaVenda)

module.exports = router;