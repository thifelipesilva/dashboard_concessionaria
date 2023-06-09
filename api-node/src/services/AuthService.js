const Services = require('./Services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class AuthService {

    constructor() {
        this.usuariosService = new Services('Usuario');
    }

    async registraUsuario(dados) {
        const { nome, email, senha } = dados;
        try {  
            this.validaDadosParaCadastro(nome, email, senha);        
            this.checkEmailCadastrado(email);
            const senhaHash = await this.encriptaSenha(senha);
            const dadosAtualizados = { nome, email, senha: senhaHash };
    
            return dadosAtualizados;
        } catch (error) {
            throw new Error('Não foi possivel registrar o usuário');
        }

    }

    async login(email, senha) {
        try {
            this.validaDadosLogin(email, senha);
            const usuario = await this.checkUsuarioExiste(email);
            await this.comparaSenha(senha, usuario.senha);
            const acessToken = this.criaToken(usuario.id, usuario.email);
            return acessToken;
            
        } catch (error) {
            throw new Error('o login falhou');
        }
    }


    validaDadosParaCadastro(nome, email, senha) {

        if(!nome) {
            throw new Error('Nome é obrigatorio');
        }
        if(!email) {
            throw new Error('Email é obrigatorio');
        }
        if(!senha) {
            throw new Error('Senha é obrigatorio');
        }

    }



    validaDadosLogin(email, senha) {
        if(!email) {
            throw new Error('Email ou senha inválida');
        } 
        if(!senha) {
            throw new Error('Email ou senha inválida');
        }
    }

    //checa se o email esta cadastrado no momento do cadastro do usuario
    async checkEmailCadastrado(email) {
        const usuarioExiste = await this.usuariosService.pegaRegistroPorEmail(email);
        if(usuarioExiste) {
            throw new Error('O usuário já esta cadastrado');
        }        
    }

    async checkUsuarioExiste(email) {
        const usuario = await this.usuariosService.pegaRegistroPorEmail(email);
        
        if(!usuario) {
            throw new Error('O usuário não existe');
        }

        return usuario;
    }

    //compara a senha passada com a senha do usuario
    async comparaSenha(senha, senhaUsuario) {
        const checkSenha = await bcrypt.compare(senha, senhaUsuario);
        if(!checkSenha) {
            throw new Error('Email ou senha inválida');
        }
    }

    
    async encriptaSenha(senha) {
        try {
            const salt = await bcrypt.genSalt(12);
            const senhaHash = await bcrypt.hash(senha, salt)
            return senhaHash;
            
        } catch (error) {
            throw new Error('Erro na encriptação da senha');
        }
    }

    criaToken(id, email) {
        const secret = process.env.SECRET;
        return jwt.sign({
            id: id,
            email: email
        }, secret, {
            expiresIn: 86400 //um dia em seg
        });
    }
}

module.exports = AuthService;