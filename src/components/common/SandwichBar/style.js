import styled from 'styled-components';


export const SandwichWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryColor};
  cursor: pointer;
  z-index: 22;
  box-shadow: -5px 5px 40px 20px rgba(227,36,75,0.65);
  @media (max-width: 900px){
    top: 4rem;
    right: 3rem;
  }
  @media (max-width: 768px){
    width: 3rem;
    height: 3rem;
  }
`