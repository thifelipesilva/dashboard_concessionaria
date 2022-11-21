const carrosControler = require('../controller/CarrosController');
const { Router } = require('express');

const router = new Router();

router
    .get('/carros', carrosControler.mostraTodosOsCarros)
    .get('/carros/:id', carrosControler.mostraCarroPorId)
    .post('/carros', carrosControler.criaCarro)
    .put('/carros/:id', carrosControler.atualizaCarro)
    .delete('/carros/:id', carrosControler.deletaCarro)

module.exports = router;