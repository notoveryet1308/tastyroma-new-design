import React from 'react';

import { ReactComponent as Booked } from '../../img/svg/Booked.svg';
import {BookedWrapper, BookedInfo} from './style';


function index() {
  return (
    <BookedWrapper>
      <Booked />
      <BookedInfo>See you at table</BookedInfo>
    </BookedWrapper>
  )
}

export default index
