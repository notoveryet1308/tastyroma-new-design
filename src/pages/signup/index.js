import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import InputField from '../../components/common/coolInputField';

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
  const [inputValues, setInputValue] = useState({});
  const getValue = (value) => {
    setInputValue({ ...inputValues, ...value });
  }
  const debounceHandler = useCallback(_.debounce(q => getValue(q), 500));

  return (
    <SignupWrapper>
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
