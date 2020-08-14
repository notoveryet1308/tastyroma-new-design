import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #000;
  z-index: 10;
`

const ColorLabel = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 10rem;
    height: .5rem;
    background: ${props => props.theme.primaryColor};
`
const LabelText = styled.p`
  position: relative;
  font-family: ${props => props.theme.secondaryFont};
  font-size:  7rem;
  text-transform: uppercase;
  color: rgba(255,255,255, .4);
  font-weight: bold;
`
function Index({labelname}) {
  return (
    <LabelWrapper>
    <ColorLabel/>
      <LabelText>{labelname}</LabelText>
    </LabelWrapper>
  )
}

export default Index
