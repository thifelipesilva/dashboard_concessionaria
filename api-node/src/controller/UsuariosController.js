const Services = require('../services/Services');
const AuthService = require('../services/AuthService');

const authService = new AuthService();
const usuariosService = new Services('Usuario');

class UsuariosController {

    static async RegistraUsuario(req, res) {      
        const { nome, email, senha } = req.body;
        try {
            const dados = await authService.registraUsuario({ nome, email, senha });
            const usuario = await usuariosService.criaRegistro(dados);            
            res.status(201).json(usuario);
        } catch (error) {
            res.status(401).json(error.message);
        }
    }

    static async loginUsuario(req, res) {

        const { email, senha } = req.body;  

        try {
            const token = await authService.login(email, senha);
            res.status(200).json(token);
        } catch (error) {
            res.status(422).json({ msg: error.message });
        }     


    }
}

module.exports = UsuariosController;