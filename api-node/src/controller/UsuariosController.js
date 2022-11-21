const bcrypt = require('bcrypt');

const Services = require('../services/Services');
const usuariosService = new Services('Usuario');

class UsuariosController {

    static async RegistraUsuario(req, res) {
        const { nome, email, senha } = req.body;

        
        if(!nome) {
            return res.status(422).json({ msg: 'nome é obrigatorio'});
        }
        if(!email) {
            return res.status(422).json({ msg: 'email é obrigatorio'});
        }

        
        if(!senha) {
            return res.status(422).json({ msg: 'senha é obrigatorio'});
        } 

        const usuarioExiste = await usuariosService.pegaRegistroPorEmail(email);

        if(usuarioExiste) {
            return res.status(422).json({ msg: 'email ja foi cadastrado'});
        }
       

        const salt = await bcrypt.genSalt(12);
        const senhaHash = await bcrypt.hash(senha, salt);
        
        const dados = { nome, email, senha: senhaHash }

        try {
            const usuario = await usuariosService.criaRegistro(dados);
            return res.status(201).json(usuario);
        } catch (error) {
            return res.status(401).json(error.message);
        }
    }

    static async loginUsuario(req, res) {

        const { email, senha } = req.body;

        if(!email) {
            return res.status(422).json({ msg: 'email é obrigatorio'});
        } else if(!senha) {
            return res.status(422).json({ msg: 'senha é obrigatorio'});
        }

        const usuario = await usuariosService.pegaRegistroPorEmail(email);
        
        if(!usuario) {
            return res.status(404).json({ msg: 'Email não cadastrado'});
        }


        const checkSenha = await bcrypt.compare(senha, usuario.senha);
        if(!checkSenha) {
            return res.status(422).json({ msg: 'Senha errada!' });
        }

        try {
            //const secret = process.env.SECRET;
            //const token = jwt.sign({ id: usuario.id }, secret);

            return res.status(200).json({ msg: 'Logado' });
        } catch (error) {
            return res.status(422).json({ msg: 'não logado' });
        }     


    }
}

module.exports = UsuariosController;