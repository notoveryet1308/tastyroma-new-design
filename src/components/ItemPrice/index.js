import React, { useState } from 'react';

import { ReactComponent as Caret } from '../../img/svg/Caret.svg';
import { ReactComponent as Rupees } from '../../img/svg/Rupees.svg';
import { ReactComponent as Plus } from '../../img/svg/Plus.svg';
import { ReactComponent as Minus } from '../../img/svg/Minus.svg';
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


function Index({ width, height, price }) {
  const [priceTypeDeatil, setPriceTypeDeatil] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [type, setType] = useState("half");
  const finalPrice = {
    half: price[0],
    full: price[1]
  }
  
  const incremntItem = ()=>{
    setItemCount(itemCount+1);
  }
  const decrementItem = ()=>{
    if(itemCount > 0)setItemCount(itemCount -1);
  }
  const priceTypeHandler = (e) => {
    setPriceTypeDeatil(!priceTypeDeatil);
  }
  const typeHandler = (e) => {
    setType(e.target.value);
    setPriceTypeDeatil(!priceTypeDeatil);
  }
  return (
    <ItemPriceWrapper
      width={width}
      height={height}
    >
      <PriceDetailType
        width={`${priceTypeDeatil ? "10rem" : "1rem"}`}
        zIndex={`${priceTypeDeatil ? "22" : "-1"}`}
        height={`${priceTypeDeatil ? "9rem" : "1rem"}`}
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
            <Qunatity>{itemCount}</Qunatity>
          </IncDecBox>
          <IncDecBox onClick={incremntItem}>
            <Plus />
          </IncDecBox>
        </AddItemToCart>
      </AddItemToCartBox>
    </ItemPriceWrapper>
  )
}

export default Index
