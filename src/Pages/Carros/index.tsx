import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Icarros {
    id: number,
    nome: string,
    marca: string,
    valor: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null
}

const Carros = () => {
    const[carros, setCarros] = useState<Icarros[]>([]);

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [valor, setValor] = useState(''); 

    const reload = useNavigate();
    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        axios.post('http://localhost:8000/carros', {
            nome: nome,
            marca: marca,
            valor: valor
        })
        .then(() => {
            alert('Carro cadastrado');
            reload(0);
        })
    }

    useEffect(() =>{
        axios.get('http://localhost:8000/carros')
            .then(res => {
                setCarros(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    function excluir(itemASerExlcuido: Icarros) {
        axios.delete(`http://localhost:8000/carros/${itemASerExlcuido.id}`)
            .then(() => {
                const listaCarros = carros.filter(carro => carro.id !== itemASerExlcuido.id);
                setCarros(listaCarros);
                alert('Carro excluído');
            })
    }

    return(
        <section className="flex flex-col w-full h-full p-4">
            <h2 className="text-3xl text-center mb-2">Carros</h2>

            <form onSubmit={aoSubmeter} className="flex flex-col gap-y-4 p-16">
                <input
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Nome do Carro"
                    className="p-3 border-solid border-b-2 border-blue-600"
                />

                <input
                    value={marca}
                    onChange={evento => setMarca(evento.target.value)}
                    type="text"
                    placeholder="Marca do carro"
                    className="p-3 border-solid border-b-2 border-blue-600"
                />

                <input
                    value={valor}
                    onChange={evento => setValor(evento.target.value)}
                    type="number"
                    placeholder="Valor do Carro"
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
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Valor</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carros.map((carro) => {
                            return (
                                <tr className="border-solid border-b-2 border-blue-600 p-3" key={carro.id}>
                                    <td>{carro.id}</td>
                                    <td>{carro.nome}</td>
                                    <td>{carro.marca}</td>
                                    <td>{carro.valor}</td>
                                    <td>
                                        <button 
                                         className="bg-red-500 border-solid border-1 p-1 rounded-lg"
                                         onClick={() => excluir(carro)}
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

export default Carros;