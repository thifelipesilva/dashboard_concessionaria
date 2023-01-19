import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoCadastro from "../../components/BotaoCadastro";
import BotaoExcluir from "../../components/BotaoExcluir";
import Campo from "../../components/Campo";
import Titulo from "../../components/Titulo";
import http from "../../http";
import IItens from "../../interfaces/IItens";



const Vendedores = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [vendedores, setVendedores] = useState<IItens[]>([]);

    const reload = useNavigate();
    
    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        http.post('vendedores', {
            nome: nome,
            email: email
        })
        .then(() => {
            alert('Vendedor cadastrado');
            reload(0);
        })

    }

    useEffect(() => {
        http.get('vendedores')
            .then(res => {
                setVendedores(res.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, []);



    return (
        <section className="flex flex-col w-full h-full p-4">
            <Titulo texto="Vendedores" />

            <form onSubmit={aoSubmeter} className="flex flex-col gap-y-4 p-16">
                <Campo
                 estado={nome}
                 setEstado={setNome}
                 tipo='text'
                 rotulo="Digite o nome do vendedor"
                />

                <Campo
                 estado={email}
                 setEstado={setEmail}
                 tipo='email'
                 rotulo="Digite o e-mail do vendedor"
                />

                <BotaoCadastro/>
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
                                        <BotaoExcluir
                                         lista={vendedores}
                                         item={vendedor} 
                                         setEstado={setVendedores}
                                         itemRota='vendedores'                                        
                                        />
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