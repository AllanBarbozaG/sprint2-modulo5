import { StyledSpan } from "./style";

function ClientsListElement({ spanValue, callBack, backgroundColor, color }) {
  return (
    <StyledSpan
      color={color}
      backgroundColor={backgroundColor}
      onClick={callBack}
    >
      {spanValue}
    </StyledSpan>
  );
}

export default ClientsListElement;
