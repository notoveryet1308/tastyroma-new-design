/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Caret } from '../../img/svg/Caret.svg';
import { ReactComponent as Rupees } from '../../img/svg/Rupees.svg';
import { ReactComponent as Plus } from '../../img/svg/Plus.svg';
import { ReactComponent as Minus } from '../../img/svg/Minus.svg';

import { addItemToCart } from '../../redux/actions/cart';

import {
  CartPriceWrapper,
  PriceTypeDetailBox,
  PriceTypeSelectorBox,
  SelectTypeInput,
  SmallContainer,
  Price,
  PriceDetail,
  AddItemBox,
  PriceTypeInput,
  PriceDetailCover

} from './style';

function Index({ id, rerenderHandler }) {

  const cartItems = useSelector(st => st.cartReducer.cartItems);
  const cartData = cartItems.filter(data => data.id === id);

  const dispatch = useDispatch();
  const selectedItem = {
    menulist: cartData[0].menulist,
    id: cartData[0].id,
    name: cartData[0].name,
    price: cartData[0].price
  }
  const [priceTypeDeatil, setPriceTypeDeatil] = useState(false);
  const [count, setItemCount] = useState(cartData[0].itemCount);
  const [type, setType] = useState(cartData[0].priceType);

  const finalPrice = {
    half: cartData[0].price[0],
    full: cartData[0].price[1]
  }


  const incremntItem = () => {
    setItemCount(count + 1);
  }
  const decrementItem = () => {
    if (count > 0) setItemCount(count - 1);
  }

  const priceTypeHandler = (e) => {
    setPriceTypeDeatil(!priceTypeDeatil);
  }
  const typeHandler = (e) => {
    setType(e.target.value);
    setPriceTypeDeatil(!priceTypeDeatil);
  }

  useEffect(() => {
    console.log("TYPE CHANGED", cartData[0].price);
  }, [type])

  useEffect(() => {
    console.log("Called", cartData)
    if (cartData && (count !== 0)) {
      const data = {
        ...selectedItem,
        "priceType": type,
        "itemCount": count,
        "selectedPricePoint": finalPrice[type]
      }

      dispatch(addItemToCart(data));
      rerenderHandler();
    }

  }, [type, count]);


  return (
    <CartPriceWrapper>
      <PriceTypeDetailBox>
        <PriceTypeSelectorBox
          width={priceTypeDeatil ? "10rem" : "2rem"}
          height={priceTypeDeatil ? "8rem" : "2rem"}
          opacity={priceTypeDeatil ? "1" : "0"}

        >
          <SelectTypeInput value="half" readOnly onClick={typeHandler} />
          {cartData[0].price[1] && <SelectTypeInput value="full" readOnly onClick={typeHandler} />}

        </PriceTypeSelectorBox>
        <PriceDetail>
          <PriceTypeInput value={type} />
          <Caret />
        </PriceDetail>
        <PriceDetailCover onClick={priceTypeHandler} />
      </PriceTypeDetailBox>
      <AddItemBox>
        <SmallContainer
          width="35%"
          pointer="pointer"
          onClick={decrementItem}
        >
          <Minus />
        </SmallContainer>
        <SmallContainer
          width="30%"
        >
          {count}
        </SmallContainer>
        <SmallContainer
          width="35%"
          pointer="pointer"
          onClick={incremntItem}
        >
          <Plus />
        </SmallContainer>
      </AddItemBox>
      <Price>{count * finalPrice[type]}<Rupees /></Price>
    </CartPriceWrapper>
  )
}

export default Index;

