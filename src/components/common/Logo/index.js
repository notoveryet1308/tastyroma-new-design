import React from 'react'
import { withRouter } from 'react-router-dom';
import { LogoWrapper, LogoText } from './style';


function index({ history }) {
  return (
    <LogoWrapper onClick={()=>history.push('/')} >
      <LogoText>Tastyroma.</LogoText>
    </LogoWrapper>
  )
}

export default withRouter(index);
