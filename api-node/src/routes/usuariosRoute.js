const { Router } = require('express');
const UsuariosController = require('../controller/UsuariosController');

const router = new Router();

router 
    .post('/usuario', UsuariosController.RegistraUsuario)
    .post('/usuario/login', UsuariosController.loginUsuario)



    
module.exports = router;
