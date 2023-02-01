import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createItem } from '../store/modules/crud';
import Select from './Select';

const ItemInput = styled.input`
  width: ${(props) => props.width};
  height: 2em;
  line-height: 2em;
  font-size: 16px;
  margin-left: ${(props) => props.marginLeft};
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgba(30, 30, 30, 0.2);
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
  }
`;

const Submit = styled.button`
  width: 10vw;
  height: 2.5em;
  line-height: 2em;
  font-size: 16px;
  margin-left: auto;
  padding: 5px;
  background: orange;
  color: white;
  font-weight: bold;
  box-shadow: -2px 2px 2px 0 rgba(30, 30, 30, 0.2);
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #0099bf;
  }
`;

export default function Input() {
  const itemInputRef = useRef();
  const priceInputRef = useRef();
  const dispatch = useDispatch();
  const [dayId, setdayId] = useState();
  const selectedDay = (el) => {
    setdayId(el);
  };

  return (
    <>
      <Select selectedDay={selectedDay} />

      <ItemInput
        width="30vw"
        marginLeft="6vw"
        placeholder="ex.철수 생일 선물"
        ref={itemInputRef}
      />

      <ItemInput
        width="20vw"
        marginLeft="3vw"
        placeholder="ex. 20000"
        ref={priceInputRef}
      />

      <Submit
        onClick={() => {
          dispatch(
            createItem({
              id: dayId,
              item: itemInputRef.current.value,
              price: priceInputRef.current.value,
              isContent: true,
            })
          );
          itemInputRef.current.value = '';
          priceInputRef.current.value = '';
        }}
      >
        확인
      </Submit>
    </>
  );
}
