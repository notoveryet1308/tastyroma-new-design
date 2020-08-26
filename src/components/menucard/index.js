import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
const CardWapper = styled.div`
  position: relative;
  width: 40%;
  height: 30rem;
  border-radius: 1rem;
  margin:2rem; 
  cursor:pointer;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
   @media (max-width: 900px){
     height: 25rem;
   }
  @media (max-width: 800px){
     height: 23rem;
   }
   @media (max-width: 650px){
     height: 20rem;
   }
   @media (max-width: 550px){
     margin: 1rem;
     height: 18rem;
   }
    @media (max-width: 500px){
     height: 16rem;
   }
   @media (max-width: 415px){
     height: 13rem;
   }
  
`
const Banner = styled.div`
  width: 100%;
  height: 6rem;
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgba(212, 175, 41, 0.9);
  font-size: 2rem;
  text-transform: uppercase;
  font-family: inherit;
  @media (max-width: 500px){
    height: 4rem;
    font-size: 1.6rem;
  }
  @media (max-width: 400px){
    height: 4rem;
    font-size: 1.5rem;
  }
  @media (max-width: 370px){
    height: 4rem;
    font-size: 1.3rem;
  }
`

function Index({ img, name, to, history }) {
  return (
    <CardWapper
      img={img}
      onClick={() => history.push(to)}
    >
      <Banner>
        {name}
      </Banner>
    </CardWapper>
  )
}

export default withRouter(Index)
