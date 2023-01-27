import React from 'react';
import styled from 'styled-components';


const ItemInput = styled.input `
width : 30vw;
height: 30px;
margin-left: 4vw;
padding: 5px;
border-radius:5px;
border:none;
:focus {outline: none;}

`

const AmountInput = styled.input `
width : 20vw;
height: 30px;
margin-left: 2vw;
padding: 5px;
border-radius:5px;
border:none;
:focus {outline: none;}
`


const Button = styled.button`

background:orange;
color:white;
font-size:16px;
font-weight:bold;
margin-left:auto;
outline : none;
border:none;
width : 10vw;
height: 40px;
border-radius:5px;
&:hover { background : blue }

`

export default function Input() {

    const resetInput = (e) => {
        e.target.value= "";
    }
    
    return (
      <> 
      
      <ItemInput 
        defaultValue="ex.철수 생일 선물" 
        onFocus={(e) => resetInput(e)}
        />

      <AmountInput
        defaultValue="ex. 20,000"
        onFocus={(e) => resetInput(e)}
      />

      <Button>확인</Button>
      
      </>
    );
  }