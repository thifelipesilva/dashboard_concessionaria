interface IItens {
    id: number,
    nome?: string,
    email?: string,
    marca?: string,
    valor?: number,
    data_venda?: Date,
    vendedor_id?: number,
    carro_id?: number
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
}

export default IItens;