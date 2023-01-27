import React from 'react';
import styled from 'styled-components';

const TableRow = styled.div`
  display:flex;
 `;

const TableCell= styled.div`
  width: ${(props) => props.width};
  float:left;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: dotted;
`;

const weekday = new Array('일', '월', '화', '수', '목', '금', '토');

export default function Item() {
  return (
    <>
    {weekday.map((el, index) => {
      return (
      <TableRow>
        <TableCell width="20%" key={index}><p>{el}</p></TableCell>
        <TableCell width="50%">
        </TableCell>
        <TableCell width="30%">
        </TableCell>
      </TableRow>
      );}
    )}
    </>
  );
}
