import styled from 'styled-components';


export const CartPriceWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const PriceTypeDetailBox = styled.div`
  position: relative;
  width: 80%;
  height: 2.5rem;
`
export const PriceDetail = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #D8D7D7;
  padding: 0 .5rem;
  border-radius: .4rem;
`
export const PriceTypeInput = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  border-radius: .4rem;
  background:inherit;
  outline: none;
  font-size: 1.5rem;
  color: #474545;
  text-transform: uppercase;
  padding-left: .5rem;
`
export const PriceDetailCover = styled.div`
  position: absolute;
  top:0;
  left: 0;
  z-index: 222;
  width: 100%;
  height: 100%;
  background: transparent;
  cursor: pointer;
`
export const PriceTypeSelectorBox = styled.div` 
  position: absolute;
  top: -6rem;
  left: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: 2;
  background:#eee;
  box-shadow: 2px 5px 25px rgba(0,0,0,.6);
  border-radius: .3rem;
  opacity: ${props => props.opacity};
  transition: all 300ms ease;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem 0;
`
export const SelectTypeInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-left: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  background: inherit;
  outline: none;
  text-transform: uppercase;
  &:hover{
    background: #D8D7D7;
  }
`
export const AddItemBox = styled.div`
  width: 55%;
  height: 3rem;
  background: rgba(127, 125, 216, 0.56);
  border-radius: 10rem;
  margin-top: 1rem;
  overflow: hidden;
  display: flex;
  /* justify-content: space-between; */
`
export const SmallContainer = styled.div`
  width:${props => props.width};
  height: 100%;
  background: rgba(127, 125, 216, 0.56);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: ${props => props.pointer};
  font-size: 2.5rem;
`
export const Price = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 3rem;
  background: rgba(37,183,95,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(37, 183, 95, 1);
  font-size: 1.6rem;
  padding: .5rem;
  border-radius: 1rem 0 1rem 0;
`