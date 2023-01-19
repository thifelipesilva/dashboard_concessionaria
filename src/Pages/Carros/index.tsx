import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BotaoCadastro from "../../components/BotaoCadastro";
import BotaoExcluir from "../../components/BotaoExcluir";
import Campo from "../../components/Campo";
import Titulo from "../../components/Titulo";

import http from "../../http";
import IItens from "../../interfaces/IItens";



const Carros = () => {
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [valor, setValor] = useState(''); 

    const[carros, setCarros] = useState<IItens[]>([]);

    const reload = useNavigate();
    
    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        http.post(`carros`, {
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
        http.get('carros')
            .then(res => {
                setCarros(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    

    return(
        <section className="flex flex-col w-full h-full p-4">
            <Titulo texto="Carros"/>

            <form onSubmit={aoSubmeter} className="flex flex-col gap-y-4 p-16">
                <Campo
                 estado={nome}
                 setEstado={setNome}
                 tipo='text'
                 rotulo='Digite o nome'                
                />

                <Campo
                 estado={marca}
                 setEstado={setMarca}
                 tipo='text'
                 rotulo='Digite a marca'                
                />
                

                <Campo
                 estado={valor}
                 setEstado={setValor}
                 tipo='number'
                 rotulo='Digite o valor'                
                />

                <BotaoCadastro/>
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
                                    <BotaoExcluir
                                        lista={carros}
                                        item={carro} 
                                        setEstado={setCarros}
                                        itemRota='carros'
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

export default Carros;