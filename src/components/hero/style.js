import styled from 'styled-components';
import heroImg from '../../img/heropic_better.jpg';

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  position: relative;
  /* @media (max-width:768px){
    height: 90vh;
  } */
`
export const Heroimg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 80%;
  background-image: url(${heroImg});
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
`
export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
`
export const CtaButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px){
    flex-direction: column;
  }
`
