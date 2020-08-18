import React from 'react';
import styled from 'styled-components';
import {ReactComponent as GoBack} from '../../img/svg/Goback.svg'
import ItemPrice from '../ItemPrice';

const ItemToCart = styled.div`
  position: relative;
  width: 90%;
  height: 13rem;
  /* background: #333; */
  margin: 0 auto;

  padding: 4rem 0;
`
const SvgBack = styled.div`
  position: absolute;
  top: .5rem;
  right: 1rem;
  display: inline-block;
  cursor:pointer;
  /* background: rgba(251, 75, 75, 0.41); */
  border-radius: 50%;
  border: 1px solid  rgba(251, 75, 75, 0.2);
`


function Index({price ,goback}) {
  return (
    <ItemToCart>
      <SvgBack onClick={goback}>
        <GoBack/>
      </SvgBack>
      <ItemPrice price={price} width="100%" height="13rem"/>
    </ItemToCart>
  )
}

export default Index
