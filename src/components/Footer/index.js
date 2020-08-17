import React from 'react';
import styled from 'styled-components';
import FooterNav from './footerNav';
import Description from './FooterDescription';
import SocialMedia from './socialmedia';

const FooterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
  /* background: #333; */
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 23rem;
  @media (max-width: 650px){
    grid-template-rows: 20rem 18rem;
  }

`

function Index() {
  return (
    <FooterWrapper>
      <FooterNav fontWeight="normal"/>
      <Description />
      <SocialMedia />
    </FooterWrapper>
  )
}

export default Index;
