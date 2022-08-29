import styled from "styled-components"

export const StyledSpan = styled.p`
  width: ${props => props.width};
  height: ${props => props.height};
  text-align: ${props => props.textAlign};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  color: white;
  height: auto;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: black;
  }
  
`
