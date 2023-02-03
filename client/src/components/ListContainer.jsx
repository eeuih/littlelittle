import React from 'react';
import { reset } from '../store/modules/crud';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Goal from './Goal';
import Input from './Input';
import ItemList from './ItemList';
import Total from './Total';
import axios from 'axios';

const ServiceName = styled.h1`
  color: white;
  margin-top: 6vh;
  margin-bottom: 20px;
`;

const Retry = styled.button`
  display: block;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  height: 2.5em;
  line-height: 2.5em;
  background: orange;
  color: white;
  margin: 0 auto;
  box-shadow: -2px 2px 2px 0 rgba(30, 30, 30, 0.2);
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #0099bf;
    cursor: pointer;
  }
`;

export default function ListContainer() {
  const dispatch = useDispatch();

  return (
    <>
      <ServiceName>Little Little</ServiceName>
      <Goal />

      <Input />

      <ItemList />
      <Total />
      <Retry
        onClick={() => {
          axios
            .post('http://localhost:8080/api/reset', {
              page: 0,
              goal: 0,
            })
            .then((res) => {
              dispatch(reset(res.data));
            });
        }}
      >
        재설정
      </Retry>
    </>
  );
}
