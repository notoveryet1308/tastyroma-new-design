import React from 'react';
import { useDispatch } from 'react-redux';

import CloseSideMenu from '../common/CrossBtn';
import { HideSideMenu } from '../../redux/actions/sideMenu';

import {
  SideMenuContainer,
  SideNavWrapper,
  NavMenuWrapper,
  navlinks,
  StyledNavLink,
  LoginSignupBox
} from './style'



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
