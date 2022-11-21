import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Ivendedores {
    id: number,
    nome: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
}

const Vendedores = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [vendedores, setVendedores] = useState<Ivendedores[]>([]);

    const reload = useNavigate();
    
    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        axios.post('http://localhost:8000/vendedores', {
            nome: nome,
            email: email
        })
        .then(() => {
            alert('Vendedor cadastrado');
            reload(0);
        })

    }

    useEffect(() => {
        axios.get('http://localhost:8000/vendedores')
            .then(res => {
                setVendedores(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, []);

    function excluir(itemASerExlcuido: Ivendedores) {
        axios.delete(`http://localhost:8000/vendedores/${itemASerExlcuido.id}`)
            .then(() => {
                const lista = vendedores.filter(vendedor => vendedor.id !== itemASerExlcuido.id);
                setVendedores(lista);
                alert('Vendedor excluído');
            })
    }

    return (
        <section className="flex flex-col w-full h-full p-4">
            <h2 className="text-3xl text-center mb-2">Vendedores</h2>

            <form onSubmit={aoSubmeter} className="flex flex-col gap-y-4 p-16">
                <input
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Nome do Vendedor"
                    className="p-3 border-solid border-b-2 border-blue-600"
                />

                <input
                    value={email}
                    onChange={evento => setEmail(evento.target.value)}
                    type="email"
                    placeholder="Email do vendedor"
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
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vendedores.map((vendedor) => {
                            return (
                                <tr className="border-solid border-b-2 border-blue-600 p-3" key={vendedor.id}>
                                    <td>{vendedor.id}</td>
                                    <td>{vendedor.nome}</td>
                                    <td>{vendedor.email}</td>
                                    <td>
                                        <button
                                         className="bg-red-500 border-solid border-1 p-1 rounded-lg"
                                         onClick={() => excluir(vendedor)}
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

export default Vendedores;