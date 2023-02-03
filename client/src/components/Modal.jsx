import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import close from '../close.svg';
import { updateItem } from '../store/modules/crud';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 20rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: rgba(126, 126, 126, 0.9);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  width: 20rem;
  height: 12rem;
  @media (min-width: 500px) {
    width: 18rem;
  }
  min-height: 10rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Close = styled.img.attrs({
  src: close,
})`
  width: 25px;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SubHead = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Itxt = styled.p`
  color: white;
  font-size: 14px;
  margin-right: 10px;
`;
const UpdateInput = styled.input`
  width: 150px;
  height: 2em;
  line-height: 2em;
  font-size: 12px;
  padding: 5px;
  box-shadow: 0 2px 2px 0 rgba(30, 30, 30, 0.2);
  border-radius: 5px;
  border: none;
  :focus {
    outline: none;
  }
`;

const Btn = styled.button`
  width: 80px;
  margin-left: 5px;
  margin-top: 5px;
  height: 2.5em;
  font-size: 12px;
  padding: 5px;
  background: ${(props) => props.color};
  color: black;
  font-weight: bold;
  box-shadow: -2px 2px 2px 0 rgba(30, 30, 30, 0.2);
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    width: 60px;
    height: 2.8em;
  }
`;

function Modal({ setModal, id, content }) {
  const itemInputRef = useRef();
  const priceInputRef = useRef();
  const dispatch = useDispatch();

  return (
    <Container>
      <Background onClick={setModal} />
      <ModalBlock>
        <Close onClick={setModal} />
        <Contents>
          <SubHead>내용을 수정해보세요.</SubHead>
          <Wrap>
            <Itxt>항목</Itxt>
            <UpdateInput
              type="text"
              defaultValue={content.item}
              ref={itemInputRef}
            />
          </Wrap>
          <Wrap>
            <Itxt>금액</Itxt>
            <UpdateInput
              type="text"
              defaultValue={content.price}
              ref={priceInputRef}
            />
          </Wrap>
          <Wrap>
            <Btn
              color="orange"
              onClick={() => {
                if (!itemInputRef.current.value) {
                  alert('항목을 다시 한번 확인해주세요!');
                } else if (!priceInputRef.current.value) {
                  alert('금액을 다시 한번 확인해주세요!');
                } else {
                  axios
                    .post('http://localhost:8080/api/update', {
                      id: id,
                      no: content.no,
                      item: itemInputRef.current.value,
                      price: priceInputRef.current.value,
                    })
                    .then((res) => {
                      dispatch(updateItem(res.data));
                    });
                  setModal();
                }
              }}
            >
              수정
            </Btn>
            <Btn color="lightgray" onClick={setModal}>
              닫기
            </Btn>
          </Wrap>
        </Contents>
      </ModalBlock>
    </Container>
  );
}

export default Modal;
