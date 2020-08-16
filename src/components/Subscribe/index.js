import React from 'react';
import styled from 'styled-components';
import subimg from '../../img/subimg.jpg';
import Input from '../common/Input';
const SubscribeWrapper = styled.div`
  width: 100%;
  height: 35rem;
  background: #000;
  @media (max-width: 768px){
    height: 30rem;
  }
`
const Content = styled.div`
 padding-top: 4rem;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
  background-image: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${subimg});
  background-position: 0 -50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px){
    background-position: 0 -90%;
  }
`
const Form = styled.form`
  display: flex;
  width: 40%;
  height: 4rem;
  /* background: #333; */
  @media (max-width: 1200px){
    width: 50%;
  }
  @media (max-width: 900px){
    width: 70%;
  }
  @media (max-width: 768px){
    width: 80%;
  }
`
const Subtag = styled.div`
  display: flex;
  width: 40%;
  height: 4rem;
  background: rgba(2, 2, 2, 0.69);
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-family: inherit;
  color: #fff;
  font-size: 1.8rem;
  margin: 2rem 1rem;
  border-radius: .3rem;
  @media (max-width: 1200px){
    width: 50%;
  }
  @media (max-width: 900px){
    width: 70%;
  }
  @media (max-width: 768px){
    width: 80%;
  }
`
const SubmitBtn = styled.button`
  width: 15rem;
  border: none;
  border-radius: .5rem;
  text-align: center;
  background: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;
  margin-left: 1.5rem;
`

function Index() {
  return (
    <SubscribeWrapper>
      <Content>
        <Form>
          <Input placeholder="Email Address" name="subinput" />
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Form>
        <Subtag>subscribe to our new letter</Subtag>
      </Content>
    </SubscribeWrapper>
  )
}

export default Index;
