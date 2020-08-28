import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

import SideMenu from '../../components/sideNavlist';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import InputField from '../../components/common/coolInputField';

import loginImg from '../../img/login.jpg';

import {
  LoginWrapper,
  Form,
  SubmitBtn,
  TopSection,
  CoverHead,
  Banner,

} from './style';


function Index() {
  const [inputValues, setInputValue] = useState({});
  const open = useSelector(st => st.sideMenuReducer.open);

  const getValue = (value) => {
    setInputValue({ ...inputValues, ...value });
  }
  const debounceHandler = useCallback(_.debounce(q => getValue(q), 500));

  return (
    <LoginWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "1"}
      />
      <TopSection img={loginImg}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" height="100%" text="LOGIN HERE" />
        </Banner>
      </TopSection>
      <Form>
        <InputField name="Username" type="email" getValue={debounceHandler} />
        <InputField name="Password" type="password" getValue={debounceHandler} />
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </LoginWrapper>
  )
}

export default Index;
