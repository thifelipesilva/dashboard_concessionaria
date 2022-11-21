const Services = require('../services/Services');
const carrosService = new Services('Carros');

class Carros {

    static async mostraTodosOsCarros(req, res) {
        try {
            const carros = await carrosService.pegaTodosRegistros();
            return res.status(200).json(carros);
            
        } catch (error) {
            return res.status(400).json(error.message);
        }
    };

    static async mostraCarroPorId(req, res) {
        const { id } = req.params;
        try {
            const carro = await carrosService.pegaRegistroPorId(id);
            return res.status(200).json(carro);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    };

    static async criaCarro(req, res) {
        const dados = req.body;
        try {
            const novoCarro = await carrosService.criaRegistro(dados);
            return res.status(201).json(novoCarro);
        } catch (error) {
            return res.status(400).json(error.message);            
        }
    };

    static async atualizaCarro(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            const carroAt = await carrosService.atualizaRegistro(dados, id);
            return res.status(200).json(carroAt);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    };

    static async deletaCarro(req, res) {
        const { id } = req.params;
        try {
            await carrosService.deletaRegistro(id);
            return res.status(200).json(`o id ${id} foi deletado`);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    };
}

module.exports = Carros;