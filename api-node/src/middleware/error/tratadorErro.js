const Erro404 = require("../../erro/erro404");
const ErroBase = require("../../erro/erroBase");

function tratadorErro(erro, req, res, next) {
  if (erro instanceof Erro404) {
    erro.enviarResposta();
  } else {
    new ErroBase().enviarResposta;
  }
}

module.exports = tratadorErro;