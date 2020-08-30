import styled from 'styled-components';
export const CartCardWrapper = styled.div`
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
export const CartImg = styled.div`
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
export const CartInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 0 0 1rem;
`
export const NameBox = styled.div`
   width: 90%;
   height: 5rem;
   word-wrap: break-word;
`
export const Name = styled.p`
  font-size: 1.6rem;
  color: #333;
  font-family: inherit;
  font-weight: bold;
  margin-bottom: .3rem;

`

export const DelButton = styled.div`
  position: absolute;
  top: .2rem;
  right: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`