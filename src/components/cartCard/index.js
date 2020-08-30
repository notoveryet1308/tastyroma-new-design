/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Delete } from '../../img/svg/Delete.svg';
import IMAGES from '../../menu-data/image';
import CartPrice from '../../components/cartPrice';

import { removeItemFromCart } from '../../redux/actions/cart';

import {
  CartCardWrapper,
  CartImg,
  CartInfo,
  NameBox,
  Name,
  DelButton
} from './style';

function Index({
  id,
  name,
  itemCount,
  selectedPricePoint,
  handleDeletionRender
}) {
  const dispatch = useDispatch();
  const modName = name.toLowerCase().split(" ").join("");

  return (
    <CartCardWrapper>
      <CartImg img={IMAGES[modName]} />
      <CartInfo>
        <NameBox>
          <Name>{name}</Name>
        </NameBox>
        <CartPrice id={id} />
      </CartInfo>
      <DelButton onClick={() => {
        dispatch(dispatch(removeItemFromCart(id)));
        handleDeletionRender(true);
      }}
      >
        <Delete />
      </DelButton>
    </CartCardWrapper>
  )
}

export default Index
