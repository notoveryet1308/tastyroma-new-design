import React from 'react';

import { ReactComponent as GoBack } from '../../img/svg/Goback.svg'
import ItemPrice from '../ItemPrice';
import { ItemToCart, SvgBack } from './style'


function Index({ price, goback, display }) {
  return (
    <ItemToCart display={display}>
      <SvgBack onClick={goback}>
        <GoBack />
      </SvgBack>
      <ItemPrice price={price} width="100%" height="13rem" />
    </ItemToCart>
  )
}

export default Index
