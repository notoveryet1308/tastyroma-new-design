import React from 'react';

import Navlink from '../common/Navlink';
import { NavbarWrapper, Navbar, Divider } from './style';

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
  }
]

function Index() {

  return (
    <NavbarWrapper>
      <Navbar>
        {navlinks.map(link => <Navlink
          to={link.to}
          linktext={link.name} />)}
        <Divider />
        <Navlink to="/login" linktext="Login" />
        <Navlink to="/signup" linktext="Sign Up" />
      </Navbar>
    </NavbarWrapper>
  )
}

export default Index;
