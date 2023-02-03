import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TotalBg = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 4px 4px orange;
  margin-bottom: 20px;

  padding: 2vh;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
export default function Total() {
  const list = useSelector((state) => state.crud.list);
  const goal = useSelector((state) => state.crud.goal);
  let sum = 0;

  for (var i = 0; i < list.length; i++) {
    sum += list[i].detail.reduce(function (ac, cu) {
      return Number(ac) + Number(cu.price);
    }, 0);
  }

  return (
    <>
      <TotalBg>
        <Text>현재 사용 금액 : {sum}원</Text> <br />
        {goal - sum >= 0 ? (
          <Text>목표 금액까지 {goal - sum}원 남았습니다! 😎</Text>
        ) : (
          <Text>목표 금액보다 {sum - goal}원 더 쓰셨어요..🙄</Text>
        )}
      </TotalBg>
    </>
  );
}
