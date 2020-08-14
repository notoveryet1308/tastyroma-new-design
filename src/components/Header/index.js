import React from 'react'

import Logo from '../common/Logo';
import Navbar from '../Navbar';
import SandwichBar from '../common/SandwichBar';

import {Header} from './style';


function index() {
  return (
    <Header>
      <Logo/>
      <Navbar/>
      <SandwichBar/>
    </Header>
  )
}

export default index
