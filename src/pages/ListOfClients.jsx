import ClientsList from '../components/ClientsList/ClientsList'
import { Container, StyledH1 } from './style'

function ListOfClients() {
  return (
    <Container>
      <StyledH1>Lista de clientes</StyledH1>

      

      <ClientsList />
    </Container>
  )
}

export default ListOfClients