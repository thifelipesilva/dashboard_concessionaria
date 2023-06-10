import { useState } from "react";
import Campo from "../../components/Campo";
import BotaoCadastro from "../../components/BotaoCadastro";
import { Link, useNavigate } from "react-router-dom";
import http from "../../http";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigator = useNavigate();

    const logaUsuario = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault();
      http.post('/usuario/login',{
        email,
        senha
      }).then(res => {
        sessionStorage.setItem('token', res.data);
        navigator('/dashboard');
      }).catch(error => {
        console.log(error.message)
      })
    }

    return(
        <div className="w-full h-screen flex">
            <div className="flex flex-col items-center mr-auto ml-auto mt-auto mb-auto">
                <h1 className="text-center text-3xl">Login</h1>
                <form className="flex flex-col gap-3" onSubmit={logaUsuario}>
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
                    <BotaoCadastro texto="Entrar"/>
                </form>
                <p className="text-center">
                    <Link to={'/cadastro'}>
                        Faça sua conta
                    </Link>
                    
                </p>
            </div>
            

        </div>
    );
}

export default Login;