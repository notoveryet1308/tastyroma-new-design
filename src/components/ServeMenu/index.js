import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import plantbased from '../../img/menu/plantbased.jpg';

const ServeMenuWrapper = styled.div`
  position: relative;
  width: 35rem;
  height: 30rem;
  border-radius: 3rem;
  background-image: url(${props => props.menuImg});
  background-size: cover;
  background-position: center;
  margin: 2rem 3rem;
  margin-right:0;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover{
    transform: translateY(-1rem);
    box-shadow: -3px 5px 23px 1px rgba(28,28,28,1);
    transition: all 300ms ease; 
  }

  @media (max-width: 1200px){
    width: 28rem;
    height: 25rem;
  }

  @media (max-width: 1000px){
    width: 25rem;
    height: 20rem;
  }

  @media (max-width: 850px){
    width: 22rem;
    height: 18rem;
  }

  @media (max-width: 768px){
    width: 100%;
    height: 18rem;
    margin: 1.5rem 0;
    border-radius: 1rem;

    &:hover{
      transform: translateY(0rem);
      box-shadow: -2px 12px 23px -188px rgba(0,0,0,1);
   
    }
  }
`
const MenuLabel = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: .5rem;
  background-color: rgba(226, 24, 55, 0.8);
  padding: .3rem 1rem;
`
const MenuName = styled.span`
  font-family: ${props => props.theme.primaryFont};
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  letter-spacing: .2rem;

  @media (max-width: 900px){
    font-size: 1.6rem;
  }

  @media (max-width: 768px){
    font-size: 1.6rem;
  }
`

function Index({ img, name, history, to }) {
  return (
    <ServeMenuWrapper
      menuImg={img}
      onClick = {()=> history.push(to)}
    >
      <MenuLabel>
        <MenuName>{name}</MenuName>
      </MenuLabel>
    </ServeMenuWrapper>
  )
}

export default withRouter(Index);
