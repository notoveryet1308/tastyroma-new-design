import React from 'react';
import styled from 'styled-components';
import weare from '../../img/werare.jpg';

const ImageWrapper = styled.div`
  width: 100%;
  height: 37rem;
  position: relative;
  
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
`
const Namebox = styled.div`
  position: absolute;
  top:0;
  right: 0;
  width: 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryColor};
  border-radius: 0 2rem 2rem 0;
`
const H1 = styled.h1`
  font-size:1.8rem;
  font-family: ${props => props.theme.secondaryfont};
  color: #fff;
  margin: .2rem 0;
`
const Name = ["T", "A", "S", "T", "Y", "R", "O", "M", "A"];

function Image() {
  return (
    <ImageWrapper>
      <Img src={weare} alt="we_are pic" />
      <Namebox>
        {
            Name.map(s => <H1>{s}</H1>)
        }
      </Namebox>
    </ImageWrapper>
  )
}

export default Image
