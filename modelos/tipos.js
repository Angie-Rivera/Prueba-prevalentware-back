import { gql } from "apollo-server-express";

const tiposEmpresa = gql`

type Empresa{
    _id: ID
    nombre: String!
    razon: String!
    nit: String!
    identificacion: String!
    empleados: Int!
    estado: Enum_Estado
}

type Query{
    Empresas: [Empresa]
}

type Mutation{
    crearEmpresa(
        nombre: String!
        razon: String!
        nit: String!
        identificacion: String!
        empleados: Int!
        estado: Enum_Estado
    ): Empresa
    editarEmpresa(_id: String!, estado: String): Empresa
}
`;

export {tiposEmpresa};