import React from 'react';
import { withRouter } from 'react-router-dom';
import {CtaWrapper, CtaBtnName} from './style';



function Index({ name, to, history }) {
  return (
    <CtaWrapper onClick={() => history.push(`/${to}`)}>
      <CtaBtnName>{name}</CtaBtnName>
    </CtaWrapper>
  )
}

export default withRouter(Index);
