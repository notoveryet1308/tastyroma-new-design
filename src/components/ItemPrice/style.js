import styled from 'styled-components';

export const ItemPriceWrapper = styled.div`
 position:relative;
 width: ${props => props.width};
 height:${props => props.height} ;
 /* background:#333; */
 display: flex;
 flex-direction: column;
 margin-top: 1rem;


`
export const InputBox = styled.div`
   position: relative;
   width: 60%;
   height: 3.5rem;
   cursor: pointer;
`
export const PriceTypeInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  outline: none;
  background:#eee;
  border-radius: .5rem;
  font-size: 1.6rem;
  padding-left: 2rem;
  text-transform: capitalize;
  letter-spacing: .1rem;
  font-family: ${props => props.theme.primaryFont};
  -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
`
export const PriceDetailType = styled.div`
  position: absolute;
  top: -5rem;
  left: 0;
  width: ${props => props.width};
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height: ${props => props.height};
  background: #fff;
  box-shadow: 2px 4px 25px rgba(0,0,0,.3);
  border-radius: .5rem;
  z-index:${props => props.zIndex};
  transition: all 300ms ease;
  padding-top: 1rem;
`
export const CaretBox = styled.div` 
  display:flex;
  width: 2.5rem;
  height:2.5rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: .4rem;
  right: 1rem;
`
export const TypeInput = styled.input`
   font-size: 1.6rem;
   font-family: inherit;
   outline: none;
   background: inherit;
   border: none;
   width: 100%;
   height: 3.5rem;
   margin-bottom: 1rem;
   padding-left: 3rem;
   cursor: pointer;
   text-transform: uppercase;
   -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
   &:hover{
     background: #eee;
   }
`
export const ShowPriceBox = styled.div`
   width: 30%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(79, 241, 75, 0.2);
   color:#004A10;
   font-family: inherit;
   font-size: 1.8rem;
   border-radius: .3rem;
   -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
`
export const PriceDetail = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
`

export const AddItemToCartBox = styled.div`
   width: 100%;
   height: 5rem;
   /* background: #333; */
   display: flex;
   justify-content: center;
   align-items: center;
`
export const AddItemToCart = styled.div`
  width: 50%;
  height: 3.5rem;
  border-radius: 5rem;
  /* border: 1.3px solid rgba(3, 0, 129, 0.6); */
  background: rgba(127, 125, 216, 0.56);
  
  display: flex;
  justify-content: space-between;
`
export const IncDecBox = styled.div`
   width: 30%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5rem 0 0 5rem;
   cursor:pointer;
`
export const Qunatity = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  color: rgba(3, 0, 129);
  -webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
`