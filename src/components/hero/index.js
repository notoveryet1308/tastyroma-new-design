import React, { useState, useEffect } from 'react';

import { useWindowSize } from '../../hooks/hooks';
import Header from '../Header';
import Herotext from '../common/Highlightbox';
import CtaButton from '../common/Ctabtn';

import {HeroWrapper, Heroimg,HeroContent,CtaButtonBox} from './style';

function Index() {
  const [currentWidth] = useWindowSize();
  const [boxwidth, setBoxwidth] = useState(12.2);
 
  useEffect(() => {
    if (currentWidth <= 768) setBoxwidth(9.2);
    else setBoxwidth(12.2);
  }, [currentWidth]);

  return (
    <HeroWrapper>
      <Header />
      <Heroimg />
      <HeroContent>
        <Herotext
          width="100%"
          height={`${boxwidth}rem`}
          text="WE SERVE PURE INDIAN FLAVOUR FOOD."
        />
        <CtaButtonBox>
          <CtaButton to="menu" name="Menu" />
          <CtaButton to="book-a-table" name="Book A Table" />
        </CtaButtonBox>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Index;
