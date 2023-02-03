import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createItem } from '../store/modules/crud';
import Select from './Select';
import axios from 'axios';

const Wrap = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-basis: auto;
`;

const ItemInput = styled.input`
  width: 35vw;
  height: 2em;
  line-height: 2em;
  margin-right: 10px;
  min-width: 40px;
  font-size: 16px;
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgba(30, 30, 30, 0.2);
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const PriceInput = styled.input`
  width: 30vw;
  height: 2em;
  line-height: 2em;
  min-width: 40px;
  margin-right: 10px;

  font-size: 16px;
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgba(30, 30, 30, 0.2);
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Submit = styled.button`
  width: 10vw;
  height: 2.5em;
  line-height: 2em;
  font-size: 16px;

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
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    width: 60px;
    height: 2.8em;
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
      <Wrap>
        <ItemInput placeholder="ex.철수 생일 선물" ref={itemInputRef} />
        <PriceInput placeholder="ex. 20000" ref={priceInputRef} />
        <Submit
          onClick={() => {
            if (!dayId) {
              alert('요일을 선택해주세요!');
            } else if (!itemInputRef.current.value) {
              alert('항목을 입력해주세요!');
            } else if (!priceInputRef.current.value) {
              alert('금액을 입력해주세요!');
            } else {
              axios
                .post('http://localhost:8080/api/create', {
                  id: dayId,
                  item: itemInputRef.current.value,
                  price: priceInputRef.current.value,
                  isContent: true,
                })
                .then((res) => {
                  dispatch(createItem(res.data));
                });
              itemInputRef.current.value = '';
              priceInputRef.current.value = '';
            }
          }}
        >
          확인
        </Submit>
      </Wrap>
    </>
  );
}
