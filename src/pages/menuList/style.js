import styled from 'styled-components';

export const MenuListWrapper = styled.div`
  width: 100%;
  position: relative;
`
export const MenuCover = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 50vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-image:  url(${props => props.cover});
  background-size: cover;
  background-position: center;

  @media (max-width: 900px){
    height: 45vh;
  }
`
export const CoverHead = styled.header`
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
export const MenulistSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100rem;
  top:50vh;
  left: 0;
  /* background: #eee; */
 
  @media (max-width: 900px){
    top: 45vh;
  }
`
export const MenuItems = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 7rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`