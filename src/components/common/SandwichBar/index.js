import React from 'react';
import {useDispatch } from 'react-redux';
import { ReactComponent as Bar } from '../../../img/svg/Bar.svg';


import { SandwichWrapper } from './style';
import { openSideMenu } from '../../../redux/actions/sideMenu';

function Index() {
 
  const dispatch = useDispatch();

  return (
    <SandwichWrapper onClick={() => dispatch(openSideMenu())}>
      <Bar />
    </SandwichWrapper>
  )
}

export default Index;
