import styled from 'styled-components';

export const HighlightWrapper = styled.div `
  position: relative;
  width:${props => props.width} ;
  height:${props => props.height};
  border-radius:${props => props.radius};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(255,255,255, .9);
  padding: 1rem;

`

export const HighlightText = styled.p `
  position: relative;
  font-size: 3rem;
  font-family: ${props => props.theme.highlightFont};
  -webkit-text-stroke: .1rem #000;
  text-align: center;
  @media (max-width: 768px){
    font-size: 2rem;
  }
`