import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideMenu from '../../components/sideNavlist';
import MenuCoverData from './utility';
import MenuData from '../../menu-data';
import BackBtn from '../../components/common/Backbtn';
import SnadwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import ItemCard from '../../components/ItemCard';
import ScrollToTop from '../../components/ScrollToTop';

import {
  MenuListWrapper,
  CoverHead,
  MenuCover,
  MenulistSection,
  MenuItems
} from './style';

function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);
  const { menulist } = useParams();
  const { cover, heading } = MenuCoverData[menulist];

  return (
    <MenuListWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <ScrollToTop />
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
