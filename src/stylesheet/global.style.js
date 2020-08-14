import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  html{
    font-size: 0.625rem;
    font-family: ${props => props.theme.primaryFont};
    background: ${props => props.theme.black};
  }
`
