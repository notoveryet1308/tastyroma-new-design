import {createGlobalStyle} from 'styled-components';
import PopularcafeNFWoff from './PopularCafeNF.woff';
import PopularcafeNFWoff2 from './PopularCafeNF.woff2';


export  const GlobalFonts = createGlobalStyle`
  @font-face {
        font-family: 'Logo Font';
        src: local('Logo Font'), local('LogoFont'),
        url(${PopularcafeNFWoff}) format('woff'),
        url(${PopularcafeNFWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
`