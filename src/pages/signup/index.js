import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import SideMenu from '../../components/sideNavlist';

import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import InputField from '../../components/common/coolInputField';
import ScrollToTop from '../../components/ScrollToTop';
import signupImg from '../../img/signup.jpg';

import {
  SignupWrapper,
  Form,
  SubmitBtn,
  TopSection,
  CoverHead,
  Banner,

} from './style';


function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);

  const [inputValues, setInputValue] = useState({});
  const getValue = (value) => {
    setInputValue({ ...inputValues, ...value });
  }
  const debounceHandler = useCallback(_.debounce(q => getValue(q), 500));

  return (
    <SignupWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <ScrollToTop/>
      <TopSection img={signupImg}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" height="100%" text="SIGNUP HERE" />
        </Banner>
      </TopSection>
      <Form>
        <InputField name="Firstname" type="text" getValue={debounceHandler} />
        <InputField name="Lastname" type="text" getValue={debounceHandler} />
        <InputField name="Email" type="email" getValue={debounceHandler} />

        <InputField name="Password" type="password" getValue={debounceHandler} />
        <InputField name="Confirm Password" type="password" getValue={debounceHandler} />

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </SignupWrapper>
  )
}

export default Index;
