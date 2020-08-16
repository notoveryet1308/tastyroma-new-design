import React from 'react';
import styled from 'styled-components';
import MainLabel from '../common/MainLabel';
import Image from './Image';

const MiniDesWrapper = styled.div`
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
  display:flex;
  justify-content: flex-end; 
  padding-right: 5rem;
  z-index: 0;
`
const Content = styled.div`
   display: flex;
   justify-content: flex-end;
   
`
const TextInfo = styled.p`
  width: 20%;
  font-size: 2rem;
  font-family:  'Felipa', cursive;
  color: #fff;
  margin: 0 5rem;
  line-height: 1.3;
  @media (max-width: 1125px){
    width: 30%;
  }
`
const Imagebox = styled.div`
  position: relative;
  width: 30%;
  z-index: 0;
  @media (max-width: 1125px){
    width: 35%;
  }
  @media (max-width: 930px){
    width: 40%;
  }
`
function Index() {
  return (
    <MiniDesWrapper>
      <MainLabel labelname="We are" />
      <ContentBox>
        <Content>
          <TextInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos possimus suscipit id alias aliquid consequatur quam quo repudiandae sed ea saepe architecto magni rem consequuntur, ducimus libero corporis pariatur.
            <br></br><br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque deserunt odit facere sit voluptates.
          </TextInfo>
          <Imagebox>
            <Image/>
          </Imagebox>
        </Content>
      </ContentBox>
    </MiniDesWrapper>
  )
}

export default Index;
