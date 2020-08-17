import React from 'react'
import styled from 'styled-components';
import Logo from '../common/Logo';
import Navlink from '../common/Navlink';

const footlinks = [
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
    name: "About Us",
    to: "/about-us"
  },
  {
    name: "Contact Us",
    to: "/contact-us"
  }
]

const FooterNavWrapper = styled.div`
  /* width: 18rem; */
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 4;
  /* background: purple; */
  @media (max-width: 650px){
    grid-column: 1/ span 5;  
  }

`


function footerNav({ fontWeight }) {
  return (
    <FooterNavWrapper>
      <div style={{marginBottom:"1rem"}}>
        <Logo />
      </div>

      {
        footlinks.map(link =>
          <Navlink
            to={link.to}
            linktext={link.name}
            fontWeight={fontWeight}
          />)
      }
    </FooterNavWrapper>
  )
}

export default footerNav
