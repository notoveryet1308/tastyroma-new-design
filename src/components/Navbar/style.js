import styled from 'styled-components';
export const NavbarWrapper = styled.div `
  position: relative;
  width: 100%; 
`
export const Navbar = styled.div `
  position: absolute;
  top:50%;
  left: 50%;
  /* width: 70%; */
  transform: translate(-50%, -50%);
  height: auto;
  display: flex;

  
 @media (min-width: 769px){
    width: 85%;
  }
  @media (min-width: 900px){
    width: 65%;
  }
  @media (min-width: 1000px){
    width: 60%;
   }
  @media (min-width: 1200px){
    width: 55%;
  }
    

  @media (max-width: 768px){
    display: none;
  }
  
`
export const Divider = styled.div `
  width: .3rem;
  height: 3.4rem;
  margin: 0 1rem;
  background-color:${props => props.theme.primaryColor};
`