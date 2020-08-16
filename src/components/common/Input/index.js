import React from 'react';

import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: .5rem;
  background: #fff; 
`
const Input = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: .5rem;
  background: inherit;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.6rem;
  padding: .1rem 1rem;
  outline: none;
`


function Index({placeholder, name}) {
  return (
    <InputWrapper>
      <Input 
         placeholder={placeholder}
         name={name}
      />
    </InputWrapper>
  )
}

export default Index
