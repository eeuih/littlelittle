import React from 'react';
import styled from 'styled-components';
import Item from './Item';
const Table = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 6px 6px rgba(30, 30, 30, 0.4);
  padding: 2vh;
  margin-bottom: 2vh;
`;

const TableRow = styled.div`
  display: flex;
`;

const TableHeader = styled.div`
  float: left;
  width: ${(props) => props.width};
  font-weight: bold;
  padding-bottom: 1.5vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: solid;
`;

export default function ItemList() {
  return (
    <>
      <Table>
        <TableRow>
          <TableHeader width="15%">요일</TableHeader>
          <TableHeader width="45%">항목</TableHeader>
          <TableHeader width="30%">금액</TableHeader>
          <TableHeader width="10%"></TableHeader>
        </TableRow>
        <Item />
      </Table>
    </>
  );
}
