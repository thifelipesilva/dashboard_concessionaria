const Services = require('../services/Services');
const pessoasServices = new Services('Vendedores');

class VendedoresController {

    static async mostraTodosVendedores(req, res) {
        try {
            const vendedores = await pessoasServices.pegaTodosRegistros();
            return res.status(200).json(vendedores);             
        } catch (error) {
            return res.status(400).json(error.message);
        }
    };

    static async mostraVendedorPorId(req, res) {
        const { id } = req.params;
        
        try {
            const vendedor = await pessoasServices.pegaRegistroPorId(id);
            return res.status(200).json(vendedor);            
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async criaVendedor(req, res) {
        const dados = req.body;
        try {
            const novoVendedor = await pessoasServices.criaRegistro(dados);
            return res.status(201).json(novoVendedor);
        } catch (error) {
            return res.status(401).json(error.message);            
        }
    }

    static async atualizaVendedor(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            const vendedorAt = await pessoasServices.atualizaRegistro(dados, id);
            return res.status(200).json(vendedorAt);
        } catch (error) {
            return res.status(400).json(error.message); 
            
        }
    };

    static async deletaVendedor(req, res) {
        const { id } = req.params;
        try {
            await pessoasServices.deletaRegistro(id);
            return res.status(200).json(`O id ${id} foi deletado`);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async restauraVendedor(req, res) {
        const { id } = req.params;

        try {
            await pessoasServices.restauraRegistro(id);
            return res.status(200).json(`O id ${id} foi restaurado`);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

}

module.exports = VendedoresController;