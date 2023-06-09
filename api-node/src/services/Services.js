const db = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }
    
    async pegaTodosRegistros() {
        return db[this.nomeDoModelo].findAll();
    }

    async pegaRegistroPorId(id) {
        return db[this.nomeDoModelo].findOne({ where: { id }})
    }

    async pegaRegistroPorEmail(email) {
        return db[this.nomeDoModelo].findOne({ where: { email: email }})
    }

    async criaRegistro(dados) {
        
        return db[this.nomeDoModelo].create(dados);
    }

    async atualizaRegistro(dados, id) {
        return db[this.nomeDoModelo].update(dados, { where: { id: id } });
    }

    async deletaRegistro(id) {
        return db[this.nomeDoModelo].destroy({ where: { id } });
    }
    async restauraRegistro(id) {
        return db[this.nomeDoModelo].restore({ where: { id } });
    }
}

module.exports = Services;
