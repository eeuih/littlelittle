import React from 'react';
import styled from 'styled-components';
import Goal from './Goal';
import Input from './Input';
import ItemList from './ItemList';
import Total from './Total';

const BackGround = styled.div`
  width: 80vw;
  margin: auto;
`;

const ServiceName = styled.h1`
  color: white;
  padding-top: 5vh;
  padding-bottom: 2.5vh;
`;

export default function ListContainer() {
  return (
    <>
      <BackGround>
        <ServiceName>Little Little, 티끌 모아 태산</ServiceName>
        <Goal />
        <div style={{ display: 'flex' }}>
          <Input />
        </div>
        <ItemList />
        <Total />
      </BackGround>
    </>
  );
}
