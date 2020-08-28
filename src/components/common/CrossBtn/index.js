import React from 'react'
import {useDispatch} from 'react-redux';
import { CrossBtnWrapper } from './style';
import {HideSideMenu} from '../../../redux/actions/sideMenu';
import {ReactComponent as Cross} from '../../../img/svg/Cross.svg';

function Index() {
  const dispatch = useDispatch();
  return (
    <CrossBtnWrapper onClick={()=> dispatch(HideSideMenu())}>
      <Cross />
    </CrossBtnWrapper>
  )
}

export default Index;
