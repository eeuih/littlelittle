import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TotalBg = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 4px 4px orange;
  padding: 2vh;
`;

export default function Total() {
  const sum = useSelector((state) => state.crud.total);
  return (
    <>
      <TotalBg>
        <h2> 현재까지 사용 금액은 {sum}원입니다. </h2>
      </TotalBg>
    </>
  );
}
