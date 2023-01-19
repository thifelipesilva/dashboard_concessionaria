import http from "../../http";
import IItens from "../../interfaces/IItens";

type Props = {
    itemRota: string
    lista: IItens[],
    item: IItens,
    setEstado: React.Dispatch<React.SetStateAction<IItens[]>>
}

const BotaoExcluir: React.FC<Props> = ({  lista, item, setEstado, itemRota }: Props)  => {
    
    function excluir(itemASerExlcuido: IItens, rota: string) {
        http.delete(`${rota}/${itemASerExlcuido.id}`)
            .then(() => {
                const listaAtual = lista.filter(itemDaLista => itemDaLista.id !== itemASerExlcuido.id);
                setEstado(listaAtual);
                alert('Item excluído');
            })
    }

    return (
        <button
            className="bg-red-500 border-solid border-1 p-1 rounded-lg"
            onClick={() => excluir(item, itemRota)}         
        >
            Deletar
        </button>
    )
}

export default BotaoExcluir;