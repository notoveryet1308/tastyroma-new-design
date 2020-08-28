import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  html{
    width: 100%;
    height: 100%;
    font-size: 0.625rem;
    font-family: ${props => props.theme.primaryFont};
    background: ${props => props.theme.black};
  }
`
