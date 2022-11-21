const Service = require('../services/Services');
const vendasService = new Service('Vendas');

class VendasController { 
    static async mostraTodasAsVendas(req, res) {
        try {
            const vendas = await vendasService.pegaTodosRegistros();
            return res.status(200).json(vendas);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    };

    static async mostraVendasPorId(req, res) {
        const { id } = req.params;
        try {
            const venda = await vendasService.pegaRegistroPorId(id);
            return res.status(200).json(venda);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    };

    static async registraVenda(req, res) {
        const dados = req.body;
        try {
            const novaVenda = await vendasService.criaRegistro(dados);
            return res.status(201).json(novaVenda);
        } catch (error) {
            return res.status(401).json(error.message);
        }
    };

    static async atualizaVenda(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            const vendaAtualizada = await vendasService.atualizaRegistro(dados, id);
            return res.status(200).json(vendaAtualizada);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async deletaVenda(req, res) {
        const { id } = req.params;
        try {
            await vendasService.deletaRegistro(id);
            return res.status(200).json(`O Id ${id} foi deletado`);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}

module.exports = VendasController;