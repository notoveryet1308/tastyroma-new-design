import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SideMenu from '../../components/sideNavlist';

import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import MenuCard from '../../components/menucard';

import menuImg from '../../img/menu-img.jpg';
import { Menus } from '../../utilities';

const MenuWrapper = styled.div`
  width: 100%;
  position:  relative;
`
const TopSection = styled.div`
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
const CoverHead = styled.header`
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
const Banner = styled.div`
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
const MenuCards = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 900px){
    width: 85%;
  }
  @media (max-width: 770px){
    width: 90%;
  }
`

function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);

  return (
    <MenuWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <TopSection img={menuImg}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" text="MENUS" height="100%" />
        </Banner>
      </TopSection>
      <MenuCards>
        {Menus.map(menu => <MenuCard {...menu} />)}
      </MenuCards>
    </MenuWrapper>
  )
}

export default Index;
