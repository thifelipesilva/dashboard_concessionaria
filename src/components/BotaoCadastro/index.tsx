import React from "react";

interface Props {
    texto: string
}
 
const BotaoCadastro: React.FC<Props> = ({ texto }: Props) => {
    return ( 
        <button type="submit" className="p-3 bg-blue-600 text-lg">
            {texto}
        </button>
    );
}
 
export default BotaoCadastro;