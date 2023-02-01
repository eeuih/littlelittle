import axios from 'axios';
// 액션 타입 정의
const INIT = 'crud/INIT';
const CREATE = 'crud/CREATE';
const UPDATE = 'crud/UPDATE';
const DELETE = 'crud/DELETE';

//액션 생성 함수
export function init(payload) {
  return {
    type: INIT,
    payload,
  };
}

export function createItem(payload) {
  let request = axios
    .post('http://localhost:8080/api/create', payload)
    .then((res) => {
      return res.data;
    });
  //res.data promise result 를 변수에 저장해서 return 으로 보내주야함

  return {
    type: CREATE,
    payload,
  };
}

export function updateItem(payload) {
  return {
    type: UPDATE,
    payload,
  };
}

export function deleteItem(payload) {
  return {
    type: DELETE,
    payload,
  };
}

const initStateEmpty = {
  list: [
    {
      id: '',
      day: '',
      detail: [
        {
          no: 0,
          item: '',
          price: '',
          isContent: false,
        },
      ],
    },
  ],
  total: '',
};

export default function crud(state = initStateEmpty, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        list: action.payload.list,
        total: action.payload.total,
      };
    case CREATE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              detail: [
                ...el.detail.concat({
                  //no: action.request.no,
                  item: action.payload.item,
                  price: action.payload.price,
                  isContent: action.payload.isContent,
                }),
              ],
            };
          } else {
            return el;
          }
        }),
      };

    default:
      return state;
  }
}
