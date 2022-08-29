import styled from "styled-components";

export const Container = styled.div`
  background-color: #155db1;
  position: fixed;
  height: 100%;
 
  width: 20%;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .9s;

  > svg {
    position: fixed;
    color: #97f425;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 1.95rem;
    margin-left: 2rem;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 20%;
      
    }
  }
`;

export const Content = styled.div`
  margin-top: 10rem;
`