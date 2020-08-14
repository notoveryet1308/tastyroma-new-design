import styled from 'styled-components';

export const CtaWrapper = styled.div`
  width: 30%;
  height: 4.5rem;
  padding: .5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryColor};
  margin: .5rem 1rem;
  cursor: pointer;
  @media(max-width: 768px){
   width: 100%;
   margin: .5rem 0;
  }
`
export const CtaBtnName = styled.p`
  font-size: 1.8rem;
  color: #fff;
  text-transform: uppercase;
`