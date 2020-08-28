import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SideMenu from '../../components/sideNavlist';
import Hero from '../../components/hero';
import MobileMiniDescrription from '../../components/mobile/MiniDescription';
import MiniDescription from '../../components/MiniDescription';
import WeServe from '../../components/WeServe';
import MobWeServe from '../../components/mobile/WeServe';
import MobChefSpecial from '../../components/mobile/ChefSpecial';
import ChefSpecial from '../../components/ChefsSpecial';
import MobRecipe from '../../components/mobile/Recipe';
import Recipe from '../../components/Recipe';
import Subscribe from '../../components/Subscribe';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height};
`
function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);

  return (
    <HomeContainer height={open ? "100vh" : "auto"} >
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <ScrollToTop />
      <Hero />
      <MobileMiniDescrription />
      <MiniDescription />
      <MobWeServe />
      <WeServe />
      <MobChefSpecial />
      <ChefSpecial />
      <MobRecipe />
      <Recipe />
      <Subscribe />
      <Footer />
    </HomeContainer>
  )
}

export default withRouter(Index);

