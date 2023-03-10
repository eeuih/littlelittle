import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  width: 120px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const DropdownBody = styled.div`
  width: 120px;
  margin-bottom: 10px;
  height: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 5px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0 rgba(30, 30, 30, 0.2);
  &:hover {
    background: #d0d0d0;
    color: white;
  }

  @media screen and (max-width: 500px) {
    width: 60px;
    font-size: 14px;
  }
`;

const DropDownList = styled.ul`
  width: 120px;
  max-width: 140px;
  min-width: 30px;
  padding: 5px;
  position: absolute;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0 rgba(30, 30, 30, 0.2);
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 500px) {
    width: 60px;
    font-size: 14px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding: 1vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: dotted;
  &:hover {
    color: orange;
    font-weight: bold;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export default function Select({ selectedDay }) {
  const weekDay = useSelector((state) => state.crud.list);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value.day);
    setIsOpen(false);
    //부모 컴포넌트(Input.jsx)로 값 보내는 함수
    selectedDay(value.id);
  };

  return (
    <>
      <DropDownContainer>
        <DropdownBody onClick={toggling}>
          {selectedOption || '요일'}
        </DropdownBody>
        {isOpen && (
          <DropDownList>
            {weekDay.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option.id}>
                {option.day}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </>
  );
}
