import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { init, next } from '../store/modules/crud';
import axios from 'axios';

const rotate = keyframes`
0%{
    transform: rotate(0deg);
  
}
50%{ 
  transform: rotate(20deg);
}
100%{
    transform: rotate(0deg);
}
`;

const Header = styled.h1`
  color: white;
  margin-top: 6vh;
  margin-bottom: 4vh;
`;

const Intro = styled.p`
  font-weight: 600;
  line-height: 1.6em;
  margin-bottom: 6vh;
  color: white;
`;

const Content = styled.div`
  font-size: 16px;
  text-align: center;
`;

const MainImg = styled.img`
  width: 50vw;
  margin-bottom: 6vh;
  max-width: 400px;
  min-width: 300px;
  animation: ${rotate} 3s ease-in-out infinite;
`;

const GoalInput = styled.input`
  width: 50vw;
  max-width: 400px;
  min-width: 200px;
  height: 2.5em;
  line-height: 2em;
  margin-bottom: 2vh;

  padding: 5px;
  box-shadow: 0 2px 2px 0 rgba(30, 30, 30, 0.2);
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
  }
`;

const Set = styled.button`
  width: 20vw;
  max-width: 200px;
  min-width: 100px;
  font-size: 18px;
  font-weight: bold;
  height: 2.5em;
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
`;

export default function Start() {
  const dispatch = useDispatch();
  const goalInputRef = useRef();

  async function mongoFetchData() {
    const resMongoData = await fetch('http://localhost:8080/api/getdata');
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
      <Header>Little Little</Header>
      <Content>
        <Intro>
          이번주의 사용 목표를 정하고, 날마다 금액을 기록해보세요!
          <br />
          주간 사용 금액을 한번에 파악 할 수 있도록 도와줍니다.
          <br />
          아래 입력 창에 목표 금액을 입력해보세요.
        </Intro>
        <MainImg src="/images/MainImg.png" />
        <GoalInput
          type="text"
          placeholder="목표 금액을 입력해주세요!"
          ref={goalInputRef}
        />
        <br />
        <Set
          onClick={() => {
            if (!goalInputRef.current.value) {
              alert('목표 숫자를 입력해주세요!');
            } else {
              axios
                .post('http://localhost:8080/api/setgoal', {
                  page: 1,
                  goal: goalInputRef.current.value,
                })
                .then((res) => {
                  dispatch(next(res.data));
                });
            }
          }}
        >
          시작하기
        </Set>
      </Content>
    </>
  );
}
