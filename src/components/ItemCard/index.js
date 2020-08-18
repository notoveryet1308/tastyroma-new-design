import React, { useState } from 'react';
import styled from 'styled-components';
import ItemToCart from '../ItemToCart';
import { ReactComponent as RatingIcon } from '../../img/svg/Rating.svg';
import { ReactComponent as AddIcon } from '../../img/svg/Add.svg';
import IMAGE from '../../menu-data/image/index';

const CardWrapper = styled.div`
  width: 31rem;
  height: 35rem;
  background: #FFF;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  @media (max-width: 1200px){
    width: 27rem;
  }
  @media (max-width: 1066px){
    width: 25rem;
  }
  @media (max-width: 1005px){
    width: 31rem;
  }
  @media (max-width: 821px){
    width: 28rem;
  }
  @media (max-width: 734px){
    width: 26rem;
  }
  @media (max-width: 685px){
    width: 25rem;
  }
   
  @media (max-width: 658px){
    width: 100%;
  }
`
const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  border-radius: 1rem 1rem 0 0;
  background-image: url(${props => props.imgpath});
  background-size: cover;
  background-position: center;
`

const CardDetailBox = styled.div`
  position: relative;
  width: 90%;
  height: 13rem;
  /* background: #333; */
  margin: 0 auto;
  padding: 4rem 0;
`
const CardName = styled.h3`
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.6rem;
  letter-spacing:1px;
`
const AddBtn = styled.div`
  position: absolute;
  top: 8rem;
  right: 1rem;
  width: 8rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #D4AF29;
  border-radius: .3rem;
  cursor: pointer;
  span{
    font-size: 1.6rem;
    color: #fff;
    font-family: inherit;
  }
`

const Type = styled.span`
  font-family: inherit;
  color: #7B7777;
  font-size: 1.5rem;
`
const Rating = styled.div`
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.8rem;
  color: #000;
  margin: .5rem 0;
  font-weight: bold;

  span{
    margin-right: .5rem;
  }
`


function Index({name, price, rating, imgpath, type}) {
  const [openToCart, setOpenToCart] = useState(false);
  const modifiedName = name.toLowerCase().split(" ").join("");
  const handleOpen = () => {
    setOpenToCart(!openToCart);
  }

  return (
    <CardWrapper>
      <CardImg imgpath = {IMAGE[modifiedName]}  />
      {
        openToCart === false ?
          <CardDetailBox>
            <CardName>{name}</CardName>
            <Type>In {type}</Type>
            <Rating>
              <span>{rating}</span>
              <RatingIcon />
            </Rating>
            <AddBtn onClick={handleOpen}>
              <span>Add</span>
              <AddIcon />
            </AddBtn>
          </CardDetailBox>
          : <ItemToCart price={price} goback={handleOpen} />
      }

    </CardWrapper>
  )
}

export default Index;
