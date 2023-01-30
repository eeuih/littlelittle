// const initState = {
//   list: [
//     {
//       id: 0,
//       day: '일',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },

//     {
//       id: 1,
//       day: '월',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },
//     {
//       id: 2,
//       day: '화',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },
//     {
//       id: 3,
//       day: '수',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },
//     {
//       id: 4,
//       day: '목',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },
//     {
//       id: 5,
//       day: '금',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },
//     {
//       id: 6,
//       day: '토',
//       detail: [{ no: 0, item: '', price: '', isContent: false }],
//     },
//   ],

//   total: '',
// };

// const totaltest = initState.list
//   .map((el) => {
//     const totalprice = el.detail.reduce((acc, obj) => {
//       return Number(acc) + Number(obj.price);
//     }, 0);
//     return totalprice;
//   })
//   .reduce((acc, obj) => {
//     return Number(acc) + Number(obj);
//   }, 0);

// initState['total'] = totaltest;

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
  //console.log(payload);

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
