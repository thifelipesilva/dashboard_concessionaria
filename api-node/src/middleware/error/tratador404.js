const Erro404 = require("../../erro/erro404");
/*
  function tratador404(req, res, next) {
    const erro404 = new Erro404;
    next(erro404);
  }
*/
function tratador404(req, res, next) {
  res.status(404).send({message: 'Página não encontrada'});
  next();
}


module.exports = tratador404;