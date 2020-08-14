import React from 'react';
import { Linkwrapper, StyledLink } from './style';

function Index({ to, linktext }) {
  return (
    <Linkwrapper>
      <StyledLink to={to}>{linktext}</StyledLink>
    </Linkwrapper>
  )
}

export default Index;
