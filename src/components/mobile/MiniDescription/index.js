import React from 'react';
import styled from 'styled-components';

const MiniDesWrapper = styled.div`
 width: 80%;
 margin: 0 auto;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px){
    display: flex;
  }
`
const Label = styled.h2`
  display: inline-block;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: inherit;
  font-weight: bold;
  margin: 3rem 0;
 
  color: #fff;
`

const Description = styled.p`
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 400;
  margin: 2rem 0;
  margin-top: 0rem;
  color: #fff;
  text-align: center;

`

function Index() {
  return (
    <MiniDesWrapper>
      <Label>WE ARE</Label>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est tincidunt integer elit gravida amet pharetra netus tempor. Ultrices proin adipiscing pellentesqu.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias consectetur nesciunt odio fugit corporis! Dolores hic exercitationem commodi rerum voluptate error doloribus dolor asperiores ipsam minima blanditiis, impedit in quod?
      </Description>
    </MiniDesWrapper>
  )
}

export default Index;
