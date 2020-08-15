import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
const SpecialMenuWrapper = styled.div`
  position: relative;
  width: 22rem;
  height: 25rem;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  margin: 1rem;
  border-radius: 2rem;
  cursor:pointer;

  @media (max-width: 768px){
    width: 27rem;
    height: 30rem;
  }
  @media (max-width: 742px){
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: 693px){
    width: 22rem;
    height: 28rem;
  }
   @media (max-width: 614px){
    width: 20rem;
    height: 25rem;
  }
  @media (max-width: 567px){
    width: 18rem;
    height: 22rem;
  }
  @media (max-width: 567px){
    width: 17rem;
    height: 20rem;
  }

  @media (max-width:490px){
    width: 100%;
    height: 20rem;
    margin-top: 1rem;
  }
`
const Namebox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items:center;
  background: rgba(197, 49, 49, 0.6);
  box-shadow: inset 0px -30px 20px -6px rgba(223, 32, 32, 0.9);
  border-radius:0 0 2rem 2rem;
  
`
const Name = styled.span`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: .1rem;
  color: #fff;
  @media (max-width: 567px){
    font-size: 1.5rem;
  }
`

function Index({ img, name, to, history }) {
  return (
    <SpecialMenuWrapper
      img={img}
      onClick={() => history.push(to)}
    >
      <Namebox>
        <Name>{name}</Name>
      </Namebox>
    </SpecialMenuWrapper>
  )
}

export default withRouter(Index);
