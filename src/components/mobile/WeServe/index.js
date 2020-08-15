import React from 'react';
import styled from 'styled-components';
import HighlightLabel from '../../common/Highlightbox';
import { Menus } from '../../../utilities';
import ServeMenu from '../../ServeMenu';

const WeServeWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  padding-bottom: 2rem;
  flex-direction: column;
  @media (max-width: 768px){
    display: flex;
  }
`
const Content = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

function Index() {
  return (
    <WeServeWrapper>
      <HighlightLabel
        width="100%"
        height="4rem"
        text="We Serve"
        radius=".3rem"
      />
      <Content>
        {Menus.map(menu => <ServeMenu {...menu} />)}
      </Content>

    </WeServeWrapper>
  )
}

export default Index;
