import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import SideMenu from '../../components/sideNavlist';
import ScrollToTop from '../../components/ScrollToTop';

import Cart from '../../components/cartCard';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import cartImg from '../../img/cart-img.jpg';

import { ReactComponent as Cross } from '../../img/svg/Cross.svg';
import {ReactComponent as Rupees } from '../../img/svg/Rupees.svg';

import {
  CartItems,
  CartWrapper,
  CloseDeleteAlert,
  CoverHead,
  TopSection,
  Banner,
  AlertInfo,
  DeleteAlertBox,
  NoCartItem,
  PaymentBox,
  PaymentButton
} from './style';



function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);
  const cartItems = useSelector(st => st.cartReducer.cartItems);
  const totalpriceOfCart = totalCartPrice(cartItems);
  const [isDel, setDel] = useState(false);
  
  const handleDeletionRender = (value) => {
    setDel(true)
  }
  
  const rerenderHandler = ()=>{

  }
  const CloseDelInfoHandler = () => {
    setDel(false);
  }

  useEffect(() => {
    if (isDel) {
      setTimeout(() => {
        setDel(false);
      }, 5000)
    }
  }, [isDel])

  return (
    <CartWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <ScrollToTop />
      <TopSection img={cartImg}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" height="100%" text="YOUR CART" />
        </Banner>
      </TopSection>

      <DeleteAlertBox
        height={isDel ? "3.5rem" : ".5rem"}
        opacity={isDel ? "1" : "0"}
      >
        <AlertInfo>REMOVED</AlertInfo>
        <CloseDeleteAlert onClick={CloseDelInfoHandler}>
          <Cross />
        </CloseDeleteAlert>
      </DeleteAlertBox>

      <CartItems>
        {cartItems.map(cart => <Cart {...cart}
          handleDeletionRender={handleDeletionRender} />)}
        {
          cartItems.length === 0 &&
          <NoCartItem>
            empty &nbsp; cart !!
           </NoCartItem>
        }
      </CartItems>
      {
        cartItems.length !== 0 &&
        <PaymentBox>
          <PaymentButton>
            PAY &nbsp; {totalpriceOfCart}<Rupees/>
        </PaymentButton>
        </PaymentBox>
      }
    </CartWrapper>
  )
}

export default Index;

const totalCartPrice = (cart)=>{
  let price = 0;
  for(let i = 0; i< cart.length; i++){
   
    let item = cart[i].itemCount;
    let selprice = cart[i].selectedPricePoint;
    price = price +  (item * selprice);
  }

  return price;
}
