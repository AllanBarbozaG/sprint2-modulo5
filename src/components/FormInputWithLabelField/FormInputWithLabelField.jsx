import { StyledDiv, StyledLabel, StyledInput } from "./styles";

function FormInputWithLabelField({
  inputName,
  labelValue,
  width,
  placeHolder,
  callBack,
}) {
  return (
    <StyledDiv width={width}>
      <StyledLabel htmlFor={inputName}> {labelValue} </StyledLabel>
      <StyledInput
        type="text"
        name={inputName}
        placeholder={placeHolder}
        onChange={callBack}
      />
    </StyledDiv>
  );
}

export default FormInputWithLabelField;
