import styled from 'styled-components';

export const CartWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
`
export const TopSection = styled.div`
  position: relative;
  width:100%;
  height: 55vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  margin-bottom: 2rem;
  @media (max-width:768px){
    height: 45vh;
  }

`
export const CoverHead = styled.header`
  position: relative;
  padding-top: 3rem;
  width:90%;
  margin: 0 auto;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
`
export const Banner = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background:#fff; */
  opacity:.9;  
  @media (max-width: 500px){
    height: 8rem;
  }
`

export const CartItems = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
   @media (max-width: 1125px){
     width: 85%;
   }
   @media (max-width: 768px){
     width: 90%;
   }
`
export const DeleteAlertBox = styled.div`
   position: relative;
   margin: 0 auto;
   width: 50%;
   height: ${props => props.height};
   opacity: ${props => props.opacity};
   display: flex;
   justify-content: center;
   align-items: center;
   background: #fff;
   border-radius: .5rem;
   transition: height 300ms ease;
  @media (max-width: 768px){
    width: 90%;
  }
`
export const AlertInfo = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 0, 0, 0.3);
  color: #FF062D;
  border-radius: .5rem;
  font-size: 1.6rem;
`
export const CloseDeleteAlert = styled.div` 
  position: absolute;
  top: .5rem;
  right:0;
  width: 4rem;
  height: 100%;
  padding-right: 1rem;
  cursor:pointer;
`

export const NoCartItem = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   color: #6A6767;
   font-size: 5rem;
   text-transform: uppercase;
`
export const PaymentBox = styled.div`
  
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PaymentButton = styled.button`
   border: none;
   width: 60%;
   height: 4rem;
   font-size: 1.6rem;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: .5rem;
   font-size: 1.6rem;
   background: #25B75F;
   color: #fff;
   cursor: pointer;
`