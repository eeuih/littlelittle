import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TableRow = styled.div`
  display: flex;
`;

const TableCell = styled.div`
  width: ${(props) => props.width};
  float: left;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: dotted;
`;

export default function Item() {
  const list = useSelector((state) => state.create.list);
  console.log(list);

  return (
    <>
      {list.map((el) => {
        return (
          <TableRow key={el.id}>
            <TableCell width="20%">{el.day}</TableCell>

            <TableCell key={el.no} width="50%">
              {el.detail.map((el) => {
                return (
                  <ul>
                    <li>{el.item}</li>
                  </ul>
                );
              })}
            </TableCell>
            <TableCell key={el.no} width="30%">
              {el.detail.map((el) => {
                return (
                  <ul>
                    <li>{el.price}</li>
                  </ul>
                );
              })}
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
