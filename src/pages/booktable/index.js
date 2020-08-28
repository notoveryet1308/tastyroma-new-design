import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

import SideMenu from '../../components/sideNavlist';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import HighlightBox from '../../components/common/Highlightbox';
import bookatable from '../../img/bookatable.jpg';

import DateCard from '../../components/dateCard';
import InputField from '../../components/common/coolInputField';
import Loading from '../../components/common/loading';
import TableBookedInfo from '../../components/booked';

import {
  BookTableWrapper,
  TopSection,
  CoverHead,
  Banner,
  BookingForm,
  BookingDate,
  Form,
  TableBooked,
  BookBtn
} from './style';

const today = new Date();
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth() + 1;

function Index() {
  const open = useSelector(st => st.sideMenuReducer.open);
  const [initial, setInitial] = useState({ box_1: true, box_2: false, box_3: false });
  const [inputValues, setInputValue] = useState({});
  const [booking, setBooking] = useState(false);
  const [booked, setBooked] = useState(false);

  const getValue = (value) => {
    setInputValue({ ...inputValues, ...value });
  }
  const debounceHandler = useCallback(_.debounce(q => getValue(q), 500));

  const handleInitial = (data) => {
    setInitial(data);
  }

  const onSubmitHandler = () => {
    setBooking(true);
  }

  const handleBookingProcess = () => {
    setTimeout(() => {
      setBooked(true);
    }, 2000)
  }
  return (
    <BookTableWrapper>
      <SideMenu
        width={open ? "100%" : "10%"}
        height={open ? "100%" : "10%"}
        opacity={open ? "1" : "0"}
        zIndex={open ? "22" : "-1"}
        scale={open ? "200" : "0"}
      />
      <TopSection img={bookatable}>
        <CoverHead>
          <BackBtn />
          <SandwichBar />
        </CoverHead>
        <Banner>
          <HighlightBox width="80%" height="100%" text="BOOK A TABLE" />
        </Banner>
      </TopSection>
      <BookingForm>
        {!booking && <BookingDate>
          <DateCard
            active={initial.box_1}
            box_1={true}
            handleInitial={handleInitial}
            date={date}
            day={day}
            month={month}
          />
          <DateCard
            active={initial.box_2}
            box_2={true}
            handleInitial={handleInitial}
            date={date + 1}
            day={day + 1}
            month={month}
          />
          <DateCard
            active={initial.box_3}
            box_3={true}
            handleInitial={handleInitial}
            date={date + 2}
            day={day + 2}
            month={month}
          />
        </BookingDate>}
        {!booking &&
          <Form onSubmit={onSubmitHandler}>
            <InputField name="Firstname" getValue={debounceHandler} />
            <InputField name="Contact Number" getValue={debounceHandler} />
            <InputField name="Expected People" getValue={debounceHandler} />
            <InputField name="Expected Arrival Time" getValue={debounceHandler} />
            <BookBtn type="submit">Book</BookBtn>
          </Form>
        }
        {
          booking &&
          <TableBooked>
            {handleBookingProcess()}
            {!booked && <Loading />}
            {booked && <TableBookedInfo />}
          </TableBooked>
        }
      </BookingForm>
    </BookTableWrapper>
  )
}
export default Index;
