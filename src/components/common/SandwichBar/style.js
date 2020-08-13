import styled from 'styled-components';


export const SandwichWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryColor};
  cursor: pointer;
  @media (max-width: 768px){
    width: 3rem;
    height: 3rem;
  }
`