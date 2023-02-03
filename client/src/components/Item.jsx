import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store/modules/crud';
import styled from 'styled-components';
import editIcon from '../edit.svg';
import deleteIcon from '../delete.svg';
import axios from 'axios';
import Modal from './Modal';

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
  &:hover {
    cursor: pointer;
  }
`;

export default function Item() {
  const list = useSelector((state) => state.crud.list);
  const [modal, setModal] = useState('');
  const [modalId, setmodalId] = useState();
  const [modalData, setModaldata] = useState();
  const dispatch = useDispatch();

  function testModal() {
    setModal('1');
  }

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
                    <Li key={detail.no}>{detail.price}원</Li>
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
                          onClick={() => {
                            testModal();
                            setmodalId(el.id);
                            setModaldata(detail);
                          }}
                          src={editIcon}
                          alt="수정"
                        />
                        {modal == '1' ? (
                          <Modal
                            setModal={setModal}
                            id={modalId}
                            content={modalData}
                          />
                        ) : (
                          ''
                        )}

                        <Icon
                          onClick={() => {
                            alert('삭제하시겠습니까?');
                            axios
                              .post('http://localhost:8080/api/delete', {
                                id: el.id,
                                no: detail.no,
                              })
                              .then((res) => {
                                dispatch(deleteItem(res.data));
                              });
                          }}
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
