import { StyledButton } from "./style";

function Button({ buttonValue, callBack, marginTop }) {
  return (
    <StyledButton marginTop={marginTop} onClick={callBack}>
      {buttonValue}
    </StyledButton>
  );
}

export default Button;
