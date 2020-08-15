import React from 'react';
import styled from 'styled-components';

import MainLabel from '../common/MainLabel';
import ServeMenu from '../ServeMenu';
import {Menus} from '../../utilities';


const WeserveWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 5rem 0;
  @media (max-width: 768px){
    display: none;
  }
`
const ContentBox = styled.div`
 
  position: relative;
  width: 100%; 
  height: 100%;
  display:flex;
  justify-content: flex-end; 
  padding-top: 4rem;
  padding-right: 5rem;
  z-index: 0;
`
const Content = styled.div`
   width: 70%;
   height: 100%;
   /* background: #eee; */
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-end;

   @media (max-width: 1300px){
     width: 90%;
   }
   
`

function Index() {
  return (
    <WeserveWrapper>
      <MainLabel labelname="We Serve" />
      <ContentBox>
        <Content>
          {Menus.map(menu=> <ServeMenu {...menu} />)}
        </Content>
      </ContentBox>
    </WeserveWrapper>
  )
}

export default Index;
