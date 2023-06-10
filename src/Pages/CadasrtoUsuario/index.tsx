import { useState } from "react";
import BotaoCadastro from "../../components/BotaoCadastro";
import Campo from "../../components/Campo";
import http from "../../http";
import { useNavigate } from "react-router-dom";

const CadatroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigator = useNavigate();

  const cadastraUsuario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    http.post('/usuario',{
      nome,
      email,
      senha
    }).then(() => {
      alert('Usuário cadastrado');
      navigator('/login');
    }).catch(error => {
      console.log(error.message)
    })

  }
  
  return (
    <div className="w-full h-screen flex">
      <div className="flex items-center  mr-auto ml-auto mt-auto mb-auto">
        <h1 className="text-center text-3xl">Cadastro</h1>
        <form className="flex flex-col gap-3" onSubmit={cadastraUsuario}>
          <Campo
            estado={nome}
            setEstado={setNome}
            rotulo="Digite seu Nome"
            tipo="text"
          />
          <Campo
            estado={email}
            setEstado={setEmail}
            rotulo="Digite seu email"
            tipo="email"
          />
          <Campo
            estado={senha}
            setEstado={setSenha}
            rotulo="Digite sua senha"
            tipo="password"
          />
          <BotaoCadastro texto="Registrar" />
        </form>
      </div>


    </div>
  );
}

export default CadatroUsuario;