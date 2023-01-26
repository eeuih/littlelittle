import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const List = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  box-shadow: 4px 4px 4px #a4a4a4;
  padding: 2vh 2vh 2vh 2vh;
`;

export default function ItemList() {
  return (
    <>
      <List>
        <table>
          <thead>
            <th>요일</th>
            <th>항목</th>
            <th>금액</th>
          </thead>
          <tbody>
            <Item />
          </tbody>
        </table>
      </List>
    </>
  );
}
