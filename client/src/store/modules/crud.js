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
        list: action.payload.list,
        // .map((el) => {
        //   if (el.id === action.payload.id) {
        //     return {
        //       ...el,
        //       detail: [
        //         ...el.detail.concat({
        //           no: action.payload.no,
        //           item: action.payload.item,
        //           price: action.payload.price,
        //           isContent: action.payload.isContent,
        //         }),
        //       ],
        //     };
        //   } else {
        //     return el;
        //   }
        // }),
      };
    case DELETE:
      return { ...state, list: action.payload.list };

    default:
      return state;
  }
}
