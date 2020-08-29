import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as Caret } from '../../img/svg/Caret.svg';
import { ReactComponent as Rupees } from '../../img/svg/Rupees.svg';
import { ReactComponent as Plus } from '../../img/svg/Plus.svg';
import { ReactComponent as Minus } from '../../img/svg/Minus.svg';

import MENUDATA from '../../menu-data';
import { addItemToCart, removeItemFromCart } from '../../redux/actions/cart';

import {
  ItemPriceWrapper,
  PriceDetail,
  PriceDetailType,
  PriceTypeInput,
  TypeInput,
  InputBox,
  CaretBox,
  ShowPriceBox,
  AddItemToCartBox,
  AddItemToCart,
  IncDecBox,
  Qunatity
} from './style';


function Index({ width, height, id }) {
  const prevCountRef = useRef();
  const dispatch = useDispatch();
  const { menulist } = useParams();
  const menudata = getMenuData(MENUDATA[menulist], id);
  const selectedItem = {
    menulist,
    id
  }
  const [priceTypeDeatil, setPriceTypeDeatil] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [type, setType] = useState("half");
  const finalPrice = {
    half: menudata[0].price[0],
    full: menudata[0].price[1]
  }


  const incremntItem = () => {
    setItemCount(itemCount + 1);
  }
  const decrementItem = () => {
    if (itemCount > 0) setItemCount(itemCount - 1);
  }
  const priceTypeHandler = (e) => {
    setPriceTypeDeatil(!priceTypeDeatil);
  }
  const typeHandler = (e) => {
    setType(e.target.value);
    setPriceTypeDeatil(!priceTypeDeatil);
  }

  useEffect(() => {
    if (itemCount !== 0) {
      const data = {
        ...selectedItem,
        priceType: type,
        itemCount
      }

      dispatch(addItemToCart(data));
    }
    if (prevCountRef.current === 1) {
      dispatch(removeItemFromCart(id));
    }
  }, [type, itemCount, selectedItem, dispatch, id]);

  useEffect(() => {
    prevCountRef.current = itemCount;
  }, [itemCount]);

  return (
    <ItemPriceWrapper
      width={width}
      height={height}
    >
      <PriceDetailType
        width={`${priceTypeDeatil ? "10rem" : "1rem"}`}
        zIndex={`${priceTypeDeatil ? "22" : "-1"}`}
        height={`${priceTypeDeatil ? "9rem" : "1rem"}`}
        opacity={`${priceTypeDeatil ? "1" : "0"}`}
      >
        <TypeInput
          value="half"
          readOnly
          onClick={typeHandler}
        />
        {finalPrice.full && <TypeInput
          value="full"
          readOnly
          onClick={typeHandler}
        />}

      </PriceDetailType>
      <PriceDetail>
        <InputBox onClick={priceTypeHandler}>
          <PriceTypeInput
            value={type}
            readOnly
          />
          <CaretBox>
            <Caret />
          </CaretBox>
        </InputBox>
        <ShowPriceBox >
          {finalPrice[type]}<Rupees />
        </ShowPriceBox>
      </PriceDetail>
      <AddItemToCartBox>
        <AddItemToCart>
          <IncDecBox onClick={decrementItem}>
            <Minus />
          </IncDecBox>
          <IncDecBox>
            <Qunatity ref={prevCountRef}>{itemCount}</Qunatity>
          </IncDecBox>
          <IncDecBox onClick={incremntItem}>
            <Plus />
          </IncDecBox>
        </AddItemToCart>
      </AddItemToCartBox>
    </ItemPriceWrapper>
  )
}

export default Index;

const getMenuData = (menudata, id) => {
  const data = menudata.filter(d => d.id === id);
  return data;
};
