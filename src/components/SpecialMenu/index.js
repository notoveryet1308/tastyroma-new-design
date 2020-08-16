import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const SpecialContainer = styled.div`
  
  position: relative;
  @media (max-width:490px){
    width: 100%;
    /* height: 20rem; */
    
  }
`
const SpecialMenuWrapper = styled.div`
  position: relative;
  width: 22rem;
  height: 25rem;
  background-image:  linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)),
   url(${props => props.img});
  background-size: cover;
  background-position: center;
  margin: 1rem;
  border-radius: 1rem;
  cursor:pointer;

  @media (max-width: 768px){
    width: 27rem;
    height: 30rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 742px){
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: 693px){
    width: 24rem;
    height: 28rem;
  }
   @media (max-width: 614px){
    width: 22rem;
    height: 25rem;
  }
  @media (max-width: 567px){
    width: 20rem;
    height: 22rem;
  }
  @media (max-width: 567px){
    width: 18rem;
    height: 20rem;
  }

  @media (max-width:490px){
    width: 100%;
    height: 20rem;
    margin-top: 1rem;
  }
`
const Namebox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items:center;
  background: rgba(197, 49, 49, 0.6);
  box-shadow: inset 0px -30px 20px -6px rgba(223, 32, 32, 0.9);
  border-radius:0 0 1rem 1rem;
  
  
`
const Name = styled.span`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: .1rem;
  color: #fff;
  @media (max-width: 567px){
    font-size: 1.5rem;
  }
`
const SubContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 7rem;
  height: 10rem;
  /* background:#eee; */
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Rating = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.8rem;
  color: white;
  background: rgba(70, 67, 239, 0.78);
  border-radius: 50%;
  margin-bottom: .5rem;
`

function Index({ img, name, to, history, rating }) {
  const [color, setColor] = useState("white");
  const onClickHandler = () => {
    if (color === "white") setColor("#F94949");
    else setColor("white");
  }
  return (
    <SpecialContainer>
      <SpecialMenuWrapper
        img={img}
        onClick={() => history.push(to)}
      >
        <Namebox>
          <Name>{name}</Name>
        </Namebox>

      </SpecialMenuWrapper>
      <SubContent>
        <Rating>{rating}</Rating>
        <svg width="34" height="30" viewBox="0 0 34 30" fill="none"
          onClick={onClickHandler}
          style={{ cursor: "pointer" }}
        >
          <path d="M16.9837 28.4421L4.15041 15.6088C3.42814 14.8263 2.86706 13.9092 2.4992 12.9099C2.13135 11.9106 1.96392 10.8487 2.00648 9.78466C2.09243 7.63581 3.0285 5.60911 4.60874 4.15042C6.18899 2.69173 8.28398 1.92053 10.4328 2.00649C12.5817 2.09244 14.6084 3.0285 16.0671 4.60875C16.3384 4.79005 16.6574 4.88681 16.9837 4.88681C17.3101 4.88681 17.6291 4.79005 17.9004 4.60875C19.3591 3.0285 21.3858 2.09244 23.5347 2.00649C25.6835 1.92053 27.7785 2.69173 29.3587 4.15042C30.939 5.60911 31.8751 7.63581 31.961 9.78466C32.047 11.9335 31.2758 14.0285 29.8171 15.6088L16.9837 28.4421Z" fill={color} stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </SubContent>
    </SpecialContainer>

  )
}

export default withRouter(Index);
