import React from 'react'
import { withRouter } from 'react-router-dom';
import { BackBtnWrapper } from './style';

function index({ history }) {
  return (
    <BackBtnWrapper onClick={() => history.goBack()}>

      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>

    </BackBtnWrapper>
  )
}

export default withRouter(index);
