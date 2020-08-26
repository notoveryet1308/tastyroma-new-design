import React from 'react';
import styled from 'styled-components';

const DateCardWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  /* background: linear-gradient(217.69deg, #1A0BCA 26.84%, #FF4242 72.68%); */
  background: ${props => props.gradient};
  margin: 1.6rem;
  border-radius: .5rem;
  transform: scale(${props => props.scale});
  transition: transform 300ms ease;
  cursor: pointer;
  box-shadow: ${props => props.boxShadow};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: .5rem 0;

  @media (max-width: 370px){
     width: 7rem;
     height: 7rem;
  }
`
const Day = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: inherit;
  color: #fff;
  @media (max-width: 370px){
     font-size: 1rem;
  }
`
const DateHolder = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-shadow: ${props => props.textShadow};
  @media (max-width: 370px){
     font-size: 2.5rem;
  }
`
const Month = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #fff;
  @media (max-width: 370px){
     font-size: 1.2rem;
  }
`

const DAYS = ["", "Monday", "Tuesday", "wednesday", "Thrusday", "friday", "saturday", "sunday"];
const MONTHS = [
  "",
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
]
function Index({ active,
  box_1,
  box_2,
  box_3,
  handleInitial,
  day,
  date,
  month

}
) {
  const bookingDatePicker = () => {
    if (box_1) {
      const data = {
        box_1: true, box_2: false, box_3: false
      }
      handleInitial(data)
    }
    if (box_2) {
      const data = {
        box_1: false, box_2: true, box_3: false
      }
      handleInitial(data)
    }
    if (box_3) {
      const data = {
        box_1: false, box_2: false, box_3: true
      }
      handleInitial(data)
    }
  }

  return (
    <DateCardWrapper
      onClick={bookingDatePicker}
      gradient={active ? `linear-gradient(217.69deg, #1A0BCA 26.84%, #FF4242 72.68%)` : `#6562F1`}
      scale={active ? `1.4` : null}
      boxShadow={active && "-2px 5px 6px rgba(204, 35, 35, 0.5)"}
    >
      <Day>{DAYS[day]}</Day>
      <DateHolder
        textShadow={active && "3px 1px #000"}
      >{date}</DateHolder>
      <Month>{MONTHS[month]}</Month>
    </DateCardWrapper>
  )
}

export default Index

// rgba(251, 251, 244, 0.37)
