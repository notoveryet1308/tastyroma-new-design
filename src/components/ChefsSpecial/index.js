import React from 'react';
import styled from 'styled-components';
import MainLabel from '../common/MainLabel';
import SpecialMenu from '../SpecialMenu';
import {SpecialMenuList} from '../../utilities';

const ChecfSpecialWrapper = styled.div`
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

   @media (max-width: 1200px){
     width: 90%;
   }
   
   
`


function Index() {
  return (
    <ChecfSpecialWrapper>
      <MainLabel labelname="Chef's Special" />
      <ContentBox>
        <Content>
{
  SpecialMenuList.map(menu=> <SpecialMenu {...menu} />)
}
        </Content>
      </ContentBox>
    </ChecfSpecialWrapper>
  )
}

export default Index;
