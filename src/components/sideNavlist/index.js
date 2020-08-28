import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CloseSideMenu from '../common/CrossBtn';
import { HideSideMenu } from '../../redux/actions/sideMenu';

const SideMenuContainer = styled.div`
  position:fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
`
const SideNavWrapper = styled.div`
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
   transition: transform 2s ease;
   overflow: hidden;
  
   border-radius: 50%;
`
const NavMenuWrapper = styled.nav`
  position: absolute;
  top: 10%;
  left:10%;
  z-index: 2222;
  width: 20rem;
  height: 100vh;
  /* background: #eee; */
  display: flex;
  flex-direction: column;
 
 @media (max-width: 768px){
   top:30%;
   left: 50%;
   transform: translateX(-50%);
 }
`
const StyledNavLink = styled(NavLink)`
   display: inline-block;
   text-decoration: none;
   color: #000;
   font-size: 2.5rem;
   text-transform: uppercase;
   margin: .5rem 0;
   font-family: inherit;
   font-weight: bold;
   /* background: #333; */
  @media (min-width: 768px){
   transition: transform 100ms ease;
   &:active{
     transform: translate(.5rem , .5rem);  
   }
   &:hover{
     color: #fff;
   }
  }
`
const LoginSignupBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  border-radius: .5rem;
  background: rgba(255,255,255,.3);
  margin: 1rem 0;
`

const navlinks = [
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
  },
  {
    name: "Fav",
    to: "/fav"
  }
]

function Index({ width, height, opacity, zIndex, scale }) {
  const dispatch = useDispatch();
  return (
    <SideMenuContainer
      zIndex={zIndex}
      opacity={opacity}
    >
      <SideNavWrapper
        width={width}
        height={height}

        scale={scale}
      />
      <CloseSideMenu />
      <NavMenuWrapper>
        {navlinks.map(link =>
          <StyledNavLink
            to={link.to}
            onClick={() => dispatch(HideSideMenu())}
          >
            {link.name}
          </StyledNavLink>)
        }
        <LoginSignupBox>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/signup">Sign Up</StyledNavLink>
        </LoginSignupBox>
      </NavMenuWrapper>
    </SideMenuContainer>
  )
}

export default Index
