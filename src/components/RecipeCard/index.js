import React from 'react';
import styled from 'styled-components';

const RecipeCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 35rem;
  height: 20rem;
  /* padding: 1.5rem; */
  background: #fff;
  border-radius: 1rem;
  margin: 1rem;
  /* margin: ${props => props.left}rem; */
  @media (max-width: 768px){
    width: 100%;
    margin: 1rem 0;
  }
  
   @media ( max-width: 480px){
     width: 100%;
     height: auto;
     margin: 1rem 0rem;
     flex-direction: column-reverse;
     padding: 0;
   }
`
const RecipeDetail = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5rem;
  @media (max-width: 480px){
    width: 100%;
    
  }
`
const RecipeName = styled.h1`
  font-family: ${props => props.theme.highlightFont};
  font-size: 2rem;
  letter-spacing:.1rem;
  -webkit-text-stroke: 1px black;
`
const RecipeInfo = styled.p`
  
  font-family: inherit;
  font-size: 1.6rem;
  margin: 1rem 0;
  color: #363535;

  @media(max-width: 480px){
    width: 70%;
  }
`
const RecipeDownload = styled.div`
  width: 100%;
  height: 3.5rem;
  background: ${props => props.theme.addBtnColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
`
const DownloadLink = styled.a`
  width: 100%;
  height: 100%;
  font-family: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.6rem;
  color: #000;
  text-align: center;
  margin-top: 1.3rem;
`
const Image = styled.img`
  width: 45%;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
  @media (max-width: 480px){
    width: 100%;
    height: 22rem;
    margin-bottom: 2rem;
    border-radius: 1rem 1rem 0 0;
  }

`

function Index({ name, downloadlink, delatil, img, left }) {
  return (
    <RecipeCardWrapper left={left}>
      <RecipeDetail>
        <RecipeName> {name} </RecipeName>
        <RecipeInfo>{delatil}</RecipeInfo>
        <RecipeDownload>
          <DownloadLink href={downloadlink} download> Download</DownloadLink>
        </RecipeDownload>
      </RecipeDetail>
      <Image src={img} alt="recipe-img" width="100" height="100" loading="lazy" />
    </RecipeCardWrapper>
  )
}

export default Index
