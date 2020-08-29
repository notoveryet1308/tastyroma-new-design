import React from 'react';

import { ReactComponent as GoBack } from '../../img/svg/Goback.svg'
import ItemPrice from '../ItemPrice';
import { ItemToCart, SvgBack } from './style'


function Index({goback, display, id }) {
  return (
    <ItemToCart display={display}>
      <SvgBack onClick={goback}>
        <GoBack />
      </SvgBack>
      <ItemPrice
        width="100%"
        height="13rem"
        id={id}
      />
    </ItemToCart>
  )
}

export default Index
