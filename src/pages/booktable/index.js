import React, { useState } from 'react';
import styled from 'styled-components';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import bookatable from '../../img/bookatable.jpg';

import DateCard from '../../components/dateCard';

const BookTableWrapper = styled.div`
  width: 100%;
  position: relative;
`
const TopSection = styled.section`
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
const CoverHead = styled.header`
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
const Banner = styled.div`
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
const BookingForm = styled.div`
   width: 50%;
   margin: 0 auto;
   height: 30vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-content: center;
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
const BookingDate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`


function Index() {
  const [initial, setInitial] = useState({ box_1: true, box_2: false, box_3: false });
  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth() +1;


  const handleInitial = (data)=>{
      setInitial(data);
  }
  return (
    <BookTableWrapper>
      <TopSection img={bookatable}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" height="100%" text="BOOK A TABLE" />
        </Banner>
      </TopSection>
      <BookingForm>
        <BookingDate>
          <DateCard
            active={initial.box_1}
            box_1= {true}
            handleInitial={handleInitial}
            date={date}
            day={day}
            month={month}
            />
          <DateCard
            active={initial.box_2}
            box_2= {true}
            handleInitial={handleInitial}
            date={date + 1}
            day={day + 1}
            month={month}
          />
          <DateCard
            active={initial.box_3} 
            box_3= {true}
            handleInitial={handleInitial}
            date={date +2}
            day={day + 2}
            month={month}
          />

        </BookingDate>
      </BookingForm>
    </BookTableWrapper>
  )
}

export default Index;
