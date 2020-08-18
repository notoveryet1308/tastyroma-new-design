import styled from 'styled-components';


export const ItemToCart = styled.div`
  position: relative;
  width: 90%;
  height: 13rem;
  margin: 0 auto;
  display: ${props => props.display};
  padding: 4rem 0;
`
export const SvgBack = styled.div`
  position: absolute;
  top: .5rem;
  right: 1rem;
  display: inline-block;
  cursor:pointer;
  border-radius: 50%;
  border: 1px solid  rgba(251, 75, 75, 0.2);
` 