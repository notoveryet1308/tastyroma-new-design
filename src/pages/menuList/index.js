import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import MenuCoverData from './utility';
import MenuData from '../../menu-data';
import BackBtn from '../../components/common/Backbtn';
import SnadwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import ItemCard from '../../components/ItemCard';


import {
  MenuListWrapper,
  CoverHead,
  MenuCover,
  MenulistSection,
  MenuItems
} from './style';

function Index() {
  const { menulist } = useParams();
  const { cover, heading } = MenuCoverData[menulist];

  return (
    <MenuListWrapper>
      <CoverHead>
        <BackBtn />
        <SnadwichBar />
      </CoverHead>
      <MenuCover
        cover={cover}
      >
        <HighlightBox
          width="80%"
          height="8rem"
          text={heading}
        />
      </MenuCover>
      <MenulistSection>
        <MenuItems>
          {MenuData[menulist].map(data => <ItemCard {...data} menulist={menulist} />)}
        </MenuItems>
      </MenulistSection>

    </MenuListWrapper>
  )
}

export default withRouter(Index);
