import styled from 'styled-components';

// import theme from './../../../theme/theme.json';

export const LogoWrapper = styled.div `
  position: relative;
  width: 14rem;
  height: 4rem;
  padding-bottom: .5rem;
  cursor:pointer;
  /* border-radius: .4rem; */
  background:${props => props.theme.primaryColor};
  
  @media (max-width:768px){
    width: 11rem;
    height: 3rem;
  }
  
`
export const LogoText = styled.h1 `
  position: relative;   
  display: inline-block;
  font-family:${props => props.theme.primaryFont};
  font-size: 2rem;
  color:${props => props.theme.white};
  margin: 1.3rem 0 0 .8rem;
  /* letter-spacing: .1rem; */
  -webkit-font-smoothing: always;
  -moz-osx-font-smoothing:always;
  @media (max-width: 768px){
    font-size: 1.6rem;
    margin-top: 1rem;
  }
`