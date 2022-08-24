import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`  
  text-decoration: none;
  color: white;

  > svg {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #98c3ed;
  font-size: 20px;
  color: #fbead3;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: #afcdea;
  }
`