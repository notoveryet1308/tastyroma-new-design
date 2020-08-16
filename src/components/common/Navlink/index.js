import React from 'react';
import { Linkwrapper, StyledLink } from './style';

function Index({ to, linktext, fontWeight }) {
  return (
    <Linkwrapper>
      <StyledLink
        to={to}
        fontWeight={fontWeight}
      >
        {linktext}
      </StyledLink>
    </Linkwrapper>
  )
}

export default Index;
