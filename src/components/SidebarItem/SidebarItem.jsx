import { Container, StyledLink } from "./styles";

function SidebarItem({ Icon, linkTo, pageName }) {
  return (
    <Container>
      <Icon />         
      <StyledLink to={linkTo}> {pageName} </StyledLink>         
    </Container>
  )
}

export default  SidebarItem