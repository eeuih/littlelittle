import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  width: 6vw;
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 1.5vh;
`;

const DropdownBody = styled.div`
  width: 8vw;
  height: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 5px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5vh;
`;

const DropDownList = styled.ul`
  width: 8vw;
  padding: 5px;
  position: absolute;
  background: white;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
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

export default function Select() {
  const weekDay = useSelector((state) => state.create.list);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <>
      <DropDownContainer>
        <DropdownBody onClick={toggling}>{selectedOption || '일'}</DropdownBody>
        {isOpen && (
          <DropDownList>
            {weekDay.map((option) => (
              <ListItem onClick={onOptionClicked(option.day)} key={option.id}>
                {option.day}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </>
  );
}
