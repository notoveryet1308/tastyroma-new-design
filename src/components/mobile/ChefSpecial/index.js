import React from 'react';
import styled from 'styled-components';
import SpecailMenu from '../../SpecialMenu';
import HighlightLabel from '../../common/Highlightbox';


import {SpecialMenuList} from '../../../utilities';

const ChefSpecialWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  flex-direction: column;
  @media (max-width: 768px){
    display: flex;
  }
`
const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: #fff; */
`

function Index() {
  return (
    <ChefSpecialWrapper>
      <HighlightLabel
        width="100%"
        height="4rem"
        text="Chef'S Special"
        radius=".3rem"
      />
      <Content>
        {
          SpecialMenuList.map(menu=> <SpecailMenu {...menu}/>)
        }
      </Content>
    </ChefSpecialWrapper>
  )
}

export default Index;
