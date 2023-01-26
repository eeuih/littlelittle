import React from 'react';
import styled from 'styled-components';
import Goal from './Goal';
import ItemList from './ItemList';

const BackGround = styled.div`
  width: 80vw;
  margin: auto;
`;

const ServiceName = styled.h1`
  color: white;
  padding-top: 7vh;
`;

export default function ListContainer() {
  return (
    <>
      <BackGround>
        <ServiceName>Little Little, 티끌 모아 태산</ServiceName>
        <Goal />
        <ItemList />
      </BackGround>
    </>
  );
}
