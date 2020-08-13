import React from 'react'
import { SandwichWrapper } from './style';

function index() {
  return (
    <SandwichWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width="25" height="25" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </SandwichWrapper>
  )
}

export default index
