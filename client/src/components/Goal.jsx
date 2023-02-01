import React from 'react';
import styled from 'styled-components';

const getWeek = (date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  return Math.ceil((currentDate + firstDay) / 7);
};

const Week = getWeek(new Date());
const Month = new Date().getMonth() + 1;

const Goaltext = styled.h3`
  padding-bottom: 3vh;
`;

export default function Goal() {
  return (
    <>
      <Goaltext>
        {Month}월 {Week}주차, 이번주 목표 금액은 입니다!{' '}
      </Goaltext>
    </>
  );
}
