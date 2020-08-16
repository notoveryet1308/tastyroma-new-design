import styled from 'styled-components';

// import theme from './../../../theme/theme.json';

export const LogoWrapper = styled.div `
  position: relative;
  width: 16rem;
  height: 4rem;
  /* padding-bottom: 1rem; */
  cursor:pointer;
  /* border-radius: .4rem; */
  background:${props => props.theme.primaryColor};
  
  @media (max-width:768px){
    width: 12rem;
    height: 3rem;
  }
  
`
export const LogoText = styled.h1 `
  position: relative;   
  display: inline-block;
  /* font-family:'Logo Font'; */
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color:${props => props.theme.white};
  margin: 1.4rem 0 0 2.5rem;
  letter-spacing: .2rem;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-font-smoothing: always;
  -moz-osx-font-smoothing:always;
  @media (max-width: 768px){
    font-size: 1.4rem;
    margin:1rem .2rem 0 1rem;

  }
`