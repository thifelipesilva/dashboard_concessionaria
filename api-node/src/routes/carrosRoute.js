const carrosControler = require('../controller/CarrosController');
const { Router } = require('express');
const autenticado = require('../middleware/auth/autenticado');

const router = new Router();

router.use(autenticado);

router
    .get('/carros', carrosControler.mostraTodosOsCarros)
    .get('/carros/:id', carrosControler.mostraCarroPorId)
    .post('/carros', carrosControler.criaCarro)
    .put('/carros/:id', carrosControler.atualizaCarro)
    .delete('/carros/:id', carrosControler.deletaCarro)

module.exports = router;