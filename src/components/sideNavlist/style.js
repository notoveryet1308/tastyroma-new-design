import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideMenuContainer = styled.div `
  position:fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
`
export const SideNavWrapper = styled.div `
   position:absolute;
   top: 50%;
   right:50%;
   width: 5rem;
   height: 5rem;
   transform: translate(-50%, -50%) scale(${props => props.scale});
   background: #FB4B4B;
   
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   margin: auto;
   transition: transform 1.5s ease;
   overflow: hidden;
  
   border-radius: 50%;
`
export const NavMenuWrapper = styled.nav `
  position: absolute;
  top: 50%;
  left:50%;
  z-index: 2222;
  width: 20rem;
  height: 100vh;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const StyledNavLink = styled(NavLink)
`
   display: inline-block;
   text-decoration: none;
   color: #000;
   font-size: 2rem;
   text-transform: uppercase;
   margin: .5rem 0;
   font-family: inherit;
   font-weight: bold;
  @media (min-width: 768px){
   font-size: 2.5rem; 
   transition: transform 100ms ease;
   &:active{
     transform: translate(.5rem , .5rem);  
   }
   &:hover{
     color: #fff;
   }
  }



`
export const LoginSignupBox = styled.div `
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  border-radius: .5rem;
  background: rgba(255,255,255,.3);
  margin: 1rem 0;
`


export const navlinks = [{
    name: "Home",
    to: "/"
  },
  {
    name: "Menu",
    to: "/menu"
  },
  {
    name: "Book A Table",
    to: "/book-a-table"
  },
  {
    name: "Cart",
    to: "/cart"
  }
]