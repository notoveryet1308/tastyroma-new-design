import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import SideMenu from '../../components/sideNavlist';
import ScrollToTop from '../../components/ScrollToTop';

import CardCardWrapper from '../../components/cartCard';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import cartImg from '../../img/cart-img.jpg';


const CartWrapper = styled.div`
  width: 100%;
  position: relative;
`
export const TopSection = styled.div`
  position: relative;
  width:100%;
  height: 55vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;

  @media (max-width:768px){
    height: 45vh;
  }

`
export const CoverHead = styled.header`
  position: relative;
  padding-top: 3rem;
  width:90%;
  margin: 0 auto;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
`
export const Banner = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background:#fff; */
  opacity:.9;  
  @media (max-width: 500px){
    height: 8rem;
  }
`

const CartItems = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
   @media (max-width: 1125px){
     width: 85%;
   }
   @media (max-width: 768px){
     width: 90%;
   }
`

function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);

  return (
    <CartWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <ScrollToTop />
      <TopSection img={cartImg}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" height="100%" text="YOUR CART" />
        </Banner>
      </TopSection>
      <CartItems>
        <CardCardWrapper />
        <CardCardWrapper />
        <CardCardWrapper />
        <CardCardWrapper />

      </CartItems>
    </CartWrapper>
  )
}

export default Index
