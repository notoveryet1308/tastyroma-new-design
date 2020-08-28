import styled from 'styled-components';

export const CrossBtnWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.black};
  cursor: pointer;
  z-index: 2222;
  @media (max-width: 900px){
    top: 4rem;
    right: 3rem;
  }
  @media (max-width: 768px){
    width: 3rem;
    height: 3rem;
  }
`