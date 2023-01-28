import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createItem } from '../store/modules/create';

const ItemInput = styled.input`
  width: ${(props) => props.width};
  height: 2em;
  line-height: 2em;
  font-size: 16px;
  margin-left: ${(props) => props.marginLeft};
  padding: 5px;
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 10vw;
  height: 2.5em;
  line-height: 2em;
  font-size: 16px;
  margin-left: auto;
  padding: 5px;
  background: orange;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background: #0099bf;
  }
`;

export default function Input() {
  const resetInput = (e) => {
    e.target.value = '';
  };

  const itemInputRef = useRef();
  const priceInputRef = useRef();

  const dispatch = useDispatch();

  return (
    <>
      <ItemInput
        width="30vw"
        marginLeft="6vw"
        defaultValue="ex.철수 생일 선물"
        onFocus={(e) => resetInput(e)}
        ref={itemInputRef}
      />

      <ItemInput
        width="20vw"
        marginLeft="3vw"
        defaultValue="ex. 20,000"
        onFocus={(e) => resetInput(e)}
        ref={priceInputRef}
      />

      <Button
        onClick={() => {
          dispatch(
            createItem({
              id: 1,
              no: Math.random(),
              item: itemInputRef.current.value,
              price: priceInputRef.current.value,
            })
          );
          itemInputRef.current.value = '';
          priceInputRef.current.value = '';
        }}
      >
        확인
      </Button>
    </>
  );
}
