const ErroBase = require("./erroBase");


class Erro404 extends ErroBase {
  constructor(mensagem = 'Página não Encontrada') {
    super(mensagem, 404)
  }
}

module.exports = Erro404;