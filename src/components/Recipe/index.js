import React from 'react';
import styled from 'styled-components';

import MainLabel from '../common/MainLabel';
import RecipeCard from '../RecipeCard';
import ravaupma from '../../img/recipe/ravaupma.jpg'
import lemonrice from '../../img/recipe/lemonrice.jpg'


const RecipeWrapper = styled.div`
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
   position: relative;
   width: 70%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-end;

   @media (max-width: 1300px){
     width: 90%;
   }
   
`

function Index() {
  return (
    <RecipeWrapper>
      <MainLabel labelname="Recipe's for you"/>
      <ContentBox>
        <Content>
           <RecipeCard 
             
             name="RAVA UPMA"
             downloadlink=""
             delatil="A Delicious recipe you from our top chef with easily available ingridents."
             img={ravaupma}
           />
           <RecipeCard 
            left="1.5"
             name="Lemon Rice"
             downloadlink=""
             delatil="A Delicious recipe you from our top chef with easily available ingridents."
             img={lemonrice}
           />
        </Content>
      </ContentBox>
    </RecipeWrapper>
  )
}

export default Index;
