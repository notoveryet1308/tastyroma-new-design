import React from 'react';
import styled from 'styled-components';

const DesWrapper = styled.div`
  padding: 1rem; 
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background: red; */
`
const Description = styled.p`
  width: 100%;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.6rem;
  text-align: center;
  color: #fff;
`
const Banner = styled.div`
  width: 100%;
  height: 3.5rem;
  border-radius:3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  background: #CCCF1D;
  text-align: center;
  margin-top: 3rem;
`

function FooterDescription() {
  return (
    <DesWrapper>
      <Description>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet, repellendus atque consequatur quaerat neque et assumenda eaque asperiores soluta quo nulla similique doloremque minus sequi amet culpa quas quis.soluta quo nulla nkjjg pool yttui bolkp.
      </Description>
      <Banner>DESIGNED AND CODE FROM SCRATCH BY RAHUL RAJ</Banner>
    </DesWrapper>
  )
}

export default FooterDescription
