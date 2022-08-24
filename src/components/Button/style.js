import styled from "styled-components";

export const StyledButton = styled.button`
  
  width: auto;
  height: auto;
  /* UI Properties */
  text-align: center;
  font: normal normal normal 14px/16px Helvetica Neue;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  margin-top: ${props => props.marginTop};
  margin-bottom: auto;
`