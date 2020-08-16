import React from 'react'
import styled from 'styled-components';
import RecipeCard from '../../RecipeCard';
import HighlightLabel from '../../common/Highlightbox';

import ravaupma from '../../../img/recipe/ravaupma.jpg'
import lemonrice from '../../../img/recipe/lemonrice.jpg'

const RecipeWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  flex-direction: column;
  @media (max-width: 768px){
    display: flex;
  }
`
const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: #fff; */
`

function style() {
  return (
    <RecipeWrapper>
      <HighlightLabel
        text="RECIPE'S FOR YOU"
        width="100%"
        height="4rem"
        radius=".3rem"
      />
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
    </RecipeWrapper>
  )
}

export default style
