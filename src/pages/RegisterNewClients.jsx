import RegisterClientForm from "../components/RegisterClientForm/RegisterClientForm"
import { Container, StyledH1 } from './style'


function RegisterNewClients() {
  return (
    <Container>
      <StyledH1>Fácil e direto para você cadastrar seus clientes!</StyledH1>

      <RegisterClientForm />
      

    </Container>
    
  )
}

export default RegisterNewClients