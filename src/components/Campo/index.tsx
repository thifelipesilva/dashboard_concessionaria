import React from "react";

type Props = {
    estado: string;
    setEstado: React.Dispatch<React.SetStateAction<string>>;
    rotulo: string;
    tipo: React.HTMLInputTypeAttribute
}


const Campo: React.FC<Props> = ({ estado, setEstado, rotulo, tipo } : Props) => {
    return ( 
        <input
         value={estado} 
         className="p-3 border-solid border-b-2 border-blue-600"
         onChange={evento => setEstado(evento.target.value)}
         placeholder={rotulo}
         type={tipo}
         required
        />
    );
}

export default Campo;