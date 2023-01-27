import React, {useState} from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
    width: 6vw
    &:hover { cursor: pointer; }
    margin-bottom:2vh;
`;
  
const DropdownBody = styled.div`
    width: 6vw;
    text-align:center;
    font-weight: bold;
    font-size: 16px;
    padding: 1vh 0 1vh 0;
    background: white;
    border-radius:5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    margin-bottom: 0.5vh;
`;



const DropDownList = styled.ul`
    width: 6vw;
    position:absolute;
    background: white;
    border-radius:5px;
    text-align:center;
    font-weight: bold;
    font-size: 16px;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 1vh;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
  border-bottom-style: dotted;
  &:hover { color : orange }
  &:last-child { border-bottom: none; }
`;

const options = ["일", "월", "화", "수", "목", "금", "토"];

export default function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);
    
    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };
    return (
      <>
      <DropDownContainer>
        <DropdownBody onClick={toggling}>
          {selectedOption || "일"}
        </DropdownBody>
        {isOpen && (
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
        )}
      </DropDownContainer>
      
      </>
    );
  }