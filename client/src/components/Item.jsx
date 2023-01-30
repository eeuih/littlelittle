import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../store/modules/crud';
import styled from 'styled-components';
import editIcon from '../edit.svg';
import deleteIcon from '../delete.svg';

const TableRow = styled.div`
  display: flex;
  font-size: 16px;
`;

const TableCell = styled.div`
  width: ${(props) => props.width};
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: dotted;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  list-style: none;
  padding-bottom: 0.5vh;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.2vw;
`;

const Icon = styled.img`
  height: 1.8em;
  margin-left: 0.5vw;
`;

export default function Item() {
  const list = useSelector((state) => state.crud.list);
  const dispatch = useDispatch();
  //console.log(list);
  const [getId, setgetId] = useState();
  const [getNo, setgetNo] = useState();
  const getInfo = (getId, getNo) => () => {
    setgetId(getId.id);
    setgetNo(getNo.no);
  };

  // console.log(getId);
  // console.log(getNo);

  // 수정이랑 삭제 할 때 getId, getNo 디스패치로 전달하면 됨

  async function mongoFetchData() {
    const resMongoData = await fetch('http://localhost:8080/mongo/getdata');
    if (resMongoData.status === 200) {
      const data = await resMongoData.json();
      if (data[0].list.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신 이상');
    }
  }

  useEffect(() => {
    mongoFetchData();
  }, []);

  return (
    <>
      {list.map((el) => {
        return (
          <TableRow key={el.id}>
            <TableCell width="15%">{el.day}</TableCell>

            <TableCell width="45%">
              {el.detail.map((detail) => {
                return (
                  <Ul>
                    <Li key={detail.no}>{detail.item}</Li>
                  </Ul>
                );
              })}
            </TableCell>

            <TableCell width="30%">
              {el.detail.map((detail) => {
                return (
                  <Ul>
                    <Li key={detail.no}>{detail.price}</Li>
                  </Ul>
                );
              })}
            </TableCell>

            <TableCell width="10%">
              {el.detail.map((detail) => {
                return (
                  <>
                    {detail.isContent ? (
                      <BtnWrap>
                        <Icon
                          onClick={getInfo(el, detail)}
                          src={editIcon}
                          alt="수정"
                        />

                        <Icon
                          onClick={getInfo(el, detail)}
                          src={deleteIcon}
                          alt="삭제"
                        />
                      </BtnWrap>
                    ) : (
                      <BtnWrap></BtnWrap>
                    )}
                  </>
                );
              })}
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
}
