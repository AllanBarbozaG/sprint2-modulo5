import { StyledSpan } from './style'

function ClientsListElement({ spanValue, callBack }) {
  return (
    <StyledSpan onClick={ callBack } >{ spanValue }</StyledSpan>

  )
}

export default ClientsListElement