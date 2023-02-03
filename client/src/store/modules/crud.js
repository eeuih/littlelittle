// 액션 타입 정의
const INIT = 'crud/INIT';
const NEXT = 'crud/NEXT';
const RESET = 'crud/RESET';
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

export function next(payload) {
  return {
    type: NEXT,
    payload,
  };
}

export function reset(payload) {
  return {
    type: NEXT,
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
  page: 0,
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
        goal: action.payload.goal,
        page: action.payload.page,
        list: action.payload.list,
      };

    case NEXT:
      return {
        ...state,
        page: action.payload.page,
        goal: action.payload.goal,
      };

    case RESET:
      return {
        ...state,
        page: action.payload.page,
        goal: action.payload.goal,
      };

    case CREATE:
      return {
        ...state,
        list: action.payload.list,
      };
    case UPDATE:
      return { ...state, list: action.payload.list };
    case DELETE:
      return { ...state, list: action.payload.list };

    default:
      return state;
  }
}
