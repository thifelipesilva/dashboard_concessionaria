interface Props {
    texto: string
}
const Titulo = ({ texto }: Props) => {
    return(
        <h2 className="text-3xl text-center mb-2">{ texto }</h2>
    );
}

export default Titulo;