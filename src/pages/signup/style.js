import styled from 'styled-components';
export const SignupWrapper = styled.div`
  position: relative;

`
export const TopSection = styled.div`
  position: relative;
  width:100%;
  height: 55vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;

  @media (max-width:768px){
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
export const Banner = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background:#fff; */
  opacity:.9;  
  @media (max-width: 500px){
    height: 8rem;
  }
`
export const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px){
    width: 70%;
  }
  @media (max-width: 600px){
    width: 80%;
  }
  @media (max-width: 500px){
    width: 90%;
  }
`
export const SubmitBtn = styled.button`
 width: 100%;
  border: none;
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25B75F;
  color: #fff;
  font-size: 1.8rem;
  text-transform: uppercase;
  height: 3.5rem;
  margin-top: 2rem;
  cursor:pointer;
`