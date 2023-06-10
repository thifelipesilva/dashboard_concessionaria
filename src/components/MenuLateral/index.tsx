import { Link } from "react-router-dom";

const MenuLateral = () => {

    const rotas = [
        {
            label: 'Home',
            to: '/dashboard'
        },
        {
            label: 'Vendedores',
            to: '/dashboard/vendedores'
        },
        {
            label: 'Carros',
            to: '/dashboard/carros'
        },
        {
            label: 'Vendas',
            to: '/dashboard/vendas'
        }
    ];

    return (
        <section className='text-teal-600 flex flex-col justify-between h-full p-3 items-center border-solid border-r-4 border-blue-600'>
            <h1 className='text-xl'>Concessionaria</h1>
            <nav>
                <ul className=' flex flex-col gap-4 text-xl hover:cursor-pointer '>
                    {
                        rotas.map((rota, index) => {
                            return (
                                <li key={index}>

                                    <Link to={rota.to}>
                                        {rota.label}
                                    </Link>


                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

            <p>Sair</p>
        </section>
    )
}

export default MenuLateral;