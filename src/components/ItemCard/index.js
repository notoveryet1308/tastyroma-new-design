import React, { useState } from 'react';

import ItemToCart from '../ItemToCart';
import { ReactComponent as RatingIcon } from '../../img/svg/Rating.svg';
import { ReactComponent as AddIcon } from '../../img/svg/Add.svg';
import IMAGE from '../../menu-data/image/index';

import {
  CardWrapper,
  CardImg,
  CardDetailBox,
  CardName,
  Type,
  Rating,
  AddBtn,

} from './style';


function Index({ name, price, rating, imgpath, type }) {
  const [openToCart, setOpenToCart] = useState(false);
  const modifiedName = name.toLowerCase().split(" ").join("");
  const handleOpen = () => {
    setOpenToCart(!openToCart);
  }

  return (
    <CardWrapper>
      <CardImg imgpath={IMAGE[modifiedName]} />

      <CardDetailBox display={!openToCart ? "block" : "none"}>
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
      <ItemToCart display={openToCart ? "block" : "none"} price={price} goback={handleOpen} />


    </CardWrapper>
  )
}

export default Index;
