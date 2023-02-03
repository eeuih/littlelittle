import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const getWeek = (date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  return Math.ceil((currentDate + firstDay) / 7);
};

const Week = getWeek(new Date());
const Month = new Date().getMonth() + 1;

const Goaltext = styled.p`
  margin-bottom: 25px;
  font-size: 20px;
  color: white;
  font-weight: 500;
`;

const Point = styled.p`
  display: inline-block;
  color: #ee0000;
  font-weight: 900;
`;

export default function Goal() {
  const goal = useSelector((state) => state.crud.goal);
  return (
    <>
      <Goaltext>
        {Month}월 {Week}주차, 이번주 목표 금액은 <Point>{goal}</Point>원입니다!
      </Goaltext>
    </>
  );
}
