import { render, screen } from '@testing-library/react';
import Vendedores from '.';


test('quando os campos estiverem vazios, não podemos adicionar um item na tabela', () => {
    render(<Vendedores/>);

    //encontrar o input no dom
    const input = screen.getAllByPlaceholderText('Digite o nome do vendedor');

    //encontrar o botão
    const botao = screen.getByRole('button');

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    //garantir que o botao esteja desabilitado
    expect(botao).toBeInTheDocument();
});


// arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)

    // agimos (realizamos clicks, definimos valores)

    // afirmamos o que queremos (onde realizamos as expectativas)