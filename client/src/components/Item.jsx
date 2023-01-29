import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TableRow = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  list-style: none;
`;

const TableCell = styled.div`
  width: ${(props) => props.width};
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: dotted;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 3.5vw;
  height: 2.5em;
  margin-right: 0.5vw;
  line-height: 2em;
  font-size: 12px;
  padding: 5px;
  background: ${(props) => props.bg};
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 2px;
`;

export default function Item() {
  const list = useSelector((state) => state.create.list);
  //console.log(list);

  return (
    <>
      {list.map((el) => {
        return (
          <TableRow key={el.id}>
            <TableCell width="15%">{el.day}</TableCell>

            <TableCell width="40%">
              {el.detail &&
                el.detail.map((detail) => {
                  return (
                    <Ul>
                      <Li key={detail.no}>{detail.item}</Li>
                    </Ul>
                  );
                })}
            </TableCell>

            <TableCell width="30%">
              {el.detail &&
                el.detail.map((detail) => {
                  return (
                    <Ul>
                      <Li key={detail.no}>{detail.price}</Li>
                    </Ul>
                  );
                })}
            </TableCell>

            <TableCell width="15%">
              <BtnWrap>
                <Button bg="gray">수정</Button>
                <Button bg="red">삭제</Button>
              </BtnWrap>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
