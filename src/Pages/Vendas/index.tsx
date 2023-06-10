import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BotaoCadastro from "../../components/BotaoCadastro";
import BotaoExcluir from "../../components/BotaoExcluir";
import Campo from "../../components/Campo";
import Titulo from "../../components/Titulo";

import http from "../../http";
import IItens from "../../interfaces/IItens";




const Vendas = () => {
    
    const reload = useNavigate();
    const [vendas, setVendas] = useState<IItens[]>([]);

    const [dataVenda, setDataVenda] = useState('');
    const [vendedorId, setVendedorId] = useState('');
    const [carroId, setCarroId] = useState(''); 

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        http.post('vendas', {
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
        http.get('vendas')
            .then(res => {
                setVendas(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    })


  

    return(
        <section className="flex flex-col w-full h-full p-4">
            <Titulo texto="Vendas"/>

            <form onSubmit={aoSubmeter} className="flex flex-col gap-y-4 p-16">
                <Campo
                 estado={dataVenda}
                 setEstado={setDataVenda}
                 tipo='date'
                 rotulo="Data da venda"
                />

                <Campo
                 estado={vendedorId}
                 setEstado={setVendedorId}
                 tipo='number'
                 rotulo="Id do vendedor"
                />
                
                <Campo
                 estado={carroId}
                 setEstado={setCarroId}
                 tipo='number'
                 rotulo="Id do carro"
                />

                <BotaoCadastro texto="Cadastrar"/>
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
                                    <td>{venda?.data_venda?.toString()}</td>                                  
                                    <td>{venda.vendedor_id}</td>
                                    <td>{venda.carro_id}</td>
                                    <td>
                                        <BotaoExcluir
                                         lista={vendas}
                                         item={venda} 
                                         setEstado={setVendas}
                                         itemRota='vendas'
                                        
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

export default Vendas;