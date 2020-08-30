import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePalette } from 'react-palette'

import SideMenu from '../../components/sideNavlist';
import ScrollToTop from '../../components/ScrollToTop';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import MenuData from '../../menu-data/index';
import IMAGES from '../../menu-data/image';
import { ReactComponent as RatingStar } from '../../img/svg/Rating.svg';
import ItemToPrice from '../../components/ItemPrice';
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
  top: -2.5rem;
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
`

const ContentSection = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width:  1200px){
    width: 80%;
  }
  @media (max-width:  1000px){
    width: 95%;
  }
  @media (max-width: 860px){
    flex-direction: column-reverse;
  }
  
`
const MenuInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

   @media (max-width: 860px){
    width: 90%;
    margin: 4rem auto;

  }
  .description-label{
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .description{
     font-family: inherit;
     font-size: 1.7rem;
     color: #AEA7A7;
     
  }
  .rating-label{
    margin-top: 2rem;
    font-size: 2rem;
    color: #fff; 
    text-transform: uppercase;
    margin-bottom: .3rem;
    
    }
  .rating-box{
    width: 100%;
    height: auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
   

    .rate{
      font-size: 2rem;
      font-weight: bold;
      color: rgba(248, 39, 71, 1);
    }
    .rateThis{
      width: 8rem;
      height: 2.5rem;
      justify-content:center;
      align-items: center;
      background: rgba(248, 39, 71, 0.73);
      color: #fff;
      cursor:pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2rem;
      border-radius: .1rem;
      font-size: 1.4rem;
    }
  }

`
const AddCommmentBtn = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  color: #fff;
  border-radius: .4rem;
  background: rgba(180, 193, 227, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  cursor: pointer;
`
const AddToCart = styled.div`
   background: #fff;
   width: 40%;
   height: 15rem;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: .5rem;
   @media (max-width: 860px){
    width: 90%;
    margin: 4rem auto;

  }
  @media (max-width: 390px){
    width: 95%;
    margin: 2rem auto;

  }
`

function Index() {

  const open = useSelector(st => st.sideMenuReducer.open);
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

  console.log(itemDetail["price"])

  return (
    <MenuDetailWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <ScrollToTop />
      <TopSection img={IMAGES[imgName]}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        {!loading && <Banner bgColor={data.vibrant} type={itemDetail.type}>
          <BannerTop>{itemDetail.type}</BannerTop>
        </Banner>}
        <MenuName>{itemDetail.name}</MenuName>
      </TopSection>
      <ContentSection>
        <MenuInfo>
          <p className="description-label">description</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem tempora excepturi tenetur ad iusto quod obcaecati ut libero. Repellendus, quisquam? Autem corporis odit incidunt debitis expedita sint voluptates voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex, voluptatem aliquam quam magnam impedit dolores debitis molestias, dignissimos nulla, beatae aut esse non numquam aperiam. Tempore maxime nam expedita?</p>
          <p className="rating-label">Rating</p>
          <div className="rating-box">
            <div className="rate">{itemDetail.rating} <RatingStar /></div>
            <div className="rateThis">
              RATE THIS
            </div>

          </div>
          <AddCommmentBtn>Add Comment </AddCommmentBtn>
        </MenuInfo>
        <AddToCart>
          {itemDetail &&
            <ItemToPrice
              width="30rem"
              height="10rem"
              id={itemDetail.id}
              name={itemDetail.name}
            />
          }
        </AddToCart>
      </ContentSection>
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