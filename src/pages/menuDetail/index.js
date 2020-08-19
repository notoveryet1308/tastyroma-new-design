import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { usePalette } from 'react-palette'
import ScrollToTop from '../../components/ScrollToTop';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import MenuData from '../../menu-data/index';
import IMAGES from '../../menu-data/image';

const MenuDetailWrapper = styled.div`
  position: relative;

`
const TopSection = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
`
const CoverHead = styled.header`
  position: relative;
  padding-top: 3rem;
  width:90%;
  margin: 0 auto;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
`
const Banner = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.bgColor};
  opacity:.9;

  @media (max-width: 500px){
    height: 8rem;
  }
`
const MenuName = styled.p`
   
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: #fff;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    letter-spacing: .1rem;
    text-align: center;
     @media (max-width: 500px){
      font-size: 2rem;
    
  }
  @media (max-width: 450px){
      width: 90%;
      margin: 0 auto;
      font-size: 1.7rem;
      text-align: center;
    
  }
`

const BannerTop = styled.div` 
  position: absolute;
  top: 24.6vh;
  left: 0;
  width: 20rem;
  height: 2.5rem;
  font-family: inherit;
  text-transform: uppercase;
  background: rgba(226, 24, 55, .8);
  color:#fff;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  font-size:1.5rem;
  align-items: center;
  @media (min-width: 500px){
    top: 23vh;
  }
`

function Index() {
  const { menulist, menuname } = useParams();
  const [itemDetail, setItemDetail] = useState("");
  const imgName = menuname.split("-").join("");
  const { data, loading } = usePalette(IMAGES[imgName]);
  useEffect(() => {
    const MenuCategory = MenuData[menulist];
    const modMenuName = menuname.toUpperCase().split("-").join(" ");
    const itemdata = MenuCategory.filter(menu => menu.name.toUpperCase() === modMenuName);
    setItemDetail(...itemdata)
  }, [menulist, menuname]);


  return (
    <MenuDetailWrapper>
      <ScrollToTop />
      <TopSection img={IMAGES[imgName]}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <BannerTop>{itemDetail.type}</BannerTop>
        {!loading && <Banner bgColor={data.vibrant} />} 
        <MenuName>{itemDetail.name}</MenuName>
      </TopSection>
    </MenuDetailWrapper>
  )
}

export default Index;


























// function getAverageRGB(imgEl) {

//   var blockSize = 5, // only visit every 5 pixels
//     defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
//     canvas = document.createElement('canvas'),
//     context = canvas.getContext && canvas.getContext('2d'),
//     data, width, height,
//     i = -4,
//     length,
//     rgb = { r: 0, g: 0, b: 0 },
//     count = 0;

//   if (!context) {
//     return defaultRGB;
//   }

//   height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
//   width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

//   context.drawImage(imgEl, 0, 0);

//   try {
//     data = context.getImageData(0, 0, width, height);
//   } catch (e) {
//     /* security error, img on diff domain */
//     return defaultRGB;
//   }

//   length = data.data.length;

//   while ((i += blockSize * 4) < length) {
//     ++count;
//     rgb.r += data.data[i];
//     rgb.g += data.data[i + 1];
//     rgb.b += data.data[i + 2];
//   }

//   // ~~ used to floor values
//   rgb.r = ~~(rgb.r / count);
//   rgb.g = ~~(rgb.g / count);
//   rgb.b = ~~(rgb.b / count);

//   return rgb;
// }