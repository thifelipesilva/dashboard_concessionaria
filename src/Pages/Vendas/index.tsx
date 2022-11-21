import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Ivendas {
    id: number,
    data_venda: Date,
    vendedor_id: number,
    carro_id: number,
    createdAt: Date,
    updatedAt: Date,
    deleteedAt: Date
}



const Vendas = () => {
    const reload = useNavigate();
    const [vendas, setVendas] = useState<Ivendas[]>([]);

    const [dataVenda, setDataVenda] = useState('');
    const [vendedorId, setVendedorId] = useState('');
    const [carroId, setCarroId] = useState(''); 

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        axios.post('http://localhost:8000/vendas', {
            data_venda: dataVenda,
            vendedor_id: vendedorId,
            carro_id: carroId
        })
        .then(() => {
            alert('Venda cadastrada');
            reload(0);
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/vendas')
            .then(res => {
                setVendas(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    })


    function excluir(itemASerExlcuido: Ivendas) {
        axios.delete(`http://localhost:8000/vendas/${itemASerExlcuido.id}`)
            .then(() => {
                const lista = vendas.filter(venda => venda.id !== itemASerExlcuido.id);
                setVendas(lista);
                alert('Venda excluído');
            })
    }

    

    return(
        <section className="flex flex-col w-full h-full p-4">
            <h2 className="text-3xl text-center mb-2">Vendas</h2>

            <form onSubmit={aoSubmeter} className="flex flex-col gap-y-4 p-16">
                <input
                    value={dataVenda}
                    onChange={evento => setDataVenda(evento.target.value)}
                    type="date"
                    placeholder="Data da Venda"
                    className="p-3 border-solid border-b-2 border-blue-600"
                />

                <input
                    value={vendedorId}
                    onChange={evento => setVendedorId(evento.target.value)}
                    type="number"
                    placeholder="Id do vendedor"
                    className="p-3 border-solid border-b-2 border-blue-600"
                />

                <input
                    value={carroId}
                    onChange={evento => setCarroId(evento.target.value)}
                    type="number"
                    placeholder="Id do carro"
                    className="p-3 border-solid border-b-2 border-blue-600"
                />

                <button type="submit" className="p-3 bg-blue-600 text-lg">
                    Cadastrar
                </button>
            </form>



            <table className="p-10 text-center mb-2 border-solid border-b-2 border-blue-600">
                <thead>
                    <tr className="mb-2 border-solid border-b-2 border-blue-600 p-3">
                        <th>Id</th>
                        <th>Data Venda</th>
                        <th>Vendedor-ID</th>
                        <th>Carro-ID</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vendas.map((venda) => {
                            return (
                                <tr className="border-solid border-b-2 border-blue-600 p-3" key={venda.id}>
                                    <td>{venda.id}</td>
                                    <td>{venda.data_venda.toString()}</td>
                                    <td>{venda.vendedor_id}</td>
                                    <td>{venda.carro_id}</td>
                                    <td>
                                        <button
                                         onClick={() => excluir(venda)}
                                         className="bg-red-500 border-solid border-1 p-1 rounded-lg"
                                        >
                                            deletar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </section>
        
    )
}

export default Vendas;