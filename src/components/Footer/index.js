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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  
  /* grid-template-columns: 1rem, 1rem, 1rem; */
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
