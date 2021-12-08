import { gql } from 'apollo-server-express';

const tiposEnum = gql`
  enum Enum_Estado {
    PENDIENTE
    APROBADA
    RECHAZADA
  }
`
export { tiposEnum };