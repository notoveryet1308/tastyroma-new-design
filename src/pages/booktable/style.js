import styled from 'styled-components';

export const BookTableWrapper = styled.div`
  width: 100%;
  position: relative;
`
export const TopSection = styled.section`
  position: relative;
  width:100%;
  height: 60vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;

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
  background: ${props => props.bgColor};
  opacity:.9;  
  @media (max-width: 500px){
    height: 8rem;
  }
`
export const BookingForm = styled.div`
   width: 50%;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
   padding-top: 4rem;
   @media (max-width: 900px){
     width: 60%;
   }
   @media (max-width: 768px){
     width: 65%;
   }
   @media (max-width: 625px){
     width: 70%;
   }
   @media (max-width: 500px){
     width: 80%;
   }
   @media (max-width: 400px){
     width: 90%;
   }
`
export const BookingDate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`
export const Form = styled.form`
 position: relative;
 display: flex;
 justify-content: center;
 flex-direction: column;
 padding-bottom: 3rem;
`
export const BookBtn = styled.button`
  border: none;
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25B75F;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  height: 3.5rem;
  margin-top: 2rem;
  cursor:pointer;
`
export const TableBooked = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center; 
  @media (max-width:768px){
    height: 30rem;
  }
`