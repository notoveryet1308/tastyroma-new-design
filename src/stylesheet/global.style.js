import {createGlobalStyle} from 'styled-components';

import theme from './../theme/theme.json';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  html{
    font-size: 0.625rem;
    font-family: ${theme.primaryFont};
  }
`
