import React from 'react';
import styled from 'styled-components';

import cartImg from '../../img/cart-img.jpg';
import {ReactComponent as Rupees} from '../../img/svg/Rupees.svg';
import CartToPrice from '../../components/ItemPrice';

const CartCardWrapper = styled.div`
   position: relative;
   width: 45%;
   height: 15rem;
   background: #eee;
   border-radius: 1rem;
   margin: 1.5rem;
   display:flex;
   justify-content: flex-start;
   align-items: center;

   @media (max-width: 970px){
     width: 46%;  
   }
   @media (max-width: 900px){
     width: 47%;
     margin: .8rem;  
   }
   @media (max-width: 768px){
     width: 90%;  
     height: 14rem;
     margin-bottom: 1.5rem;
   }

   @media (max-width: 400px){
     width: 100%;
     height: 13rem;
   }
`
const CartImg = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  border-radius: .5rem 0 0 .5rem;

  @media (max-width: 430px){
    width: 35%;
  }
`
const CartInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background: #141414; */
  padding:  .5rem;
`
const Name = styled.h3`
  font-size: 1.6rem;
  color: #333;
  font-family: inherit;
  
  @media (max-width: 450px){
    font-size: 1.4rem;
  }

`
const Price = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  
  height: 4rem;
  background: rgba(37,183,95,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(37, 183, 95, 1);
  font-size: 1.6rem;
  padding: .5rem;
  border-radius: 1rem 0 1rem 0;
`

function Index() {
  return (
    <CartCardWrapper>
      <CartImg img={cartImg} />
      <CartInfo>
        <Name>Lemon BreadLemon Bread Lemon Bread</Name>
      </CartInfo>
      <Price>
        3453<Rupees />
      </Price>
    </CartCardWrapper>
  )
}

export default Index
