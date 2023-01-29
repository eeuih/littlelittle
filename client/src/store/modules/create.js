const initState = {
  list: [
    {
      id: 0,
      day: '일',
      detail: [{ no: 0, item: '', price: '' }],
    },

    {
      id: 1,
      day: '월',
      detail: [{ no: 0, item: '', price: '' }],
    },
    {
      id: 2,
      day: '화',
      detail: [{ no: 0, item: '', price: '' }],
    },
    {
      id: 3,
      day: '수',
      detail: [{ no: 0, item: '', price: '' }],
    },
    {
      id: 4,
      day: '목',
      detail: [{ no: 0, item: '', price: '' }],
    },
    {
      id: 5,
      day: '금',
      detail: [{ no: 0, item: '', price: '' }],
    },
    {
      id: 6,
      day: '토',
      detail: [{ no: 0, item: '', price: '' }],
    },
  ],

  total: '',
};

const CREATE = 'create/CREATE';

const SUM = 'create/SUM';

export function createItem(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function sumPrice(payload) {
  console.log(payload);
  return {
    type: SUM,
    payload,
  };
}

export default function create(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              detail: [
                ...el.detail.concat({
                  no: action.payload.no,
                  item: action.payload.item,
                  price: action.payload.price + '원',
                }),
              ],
            };
          } else {
            return el;
          }
        }),
      };

    case SUM:
      return {
        ...state,
        total: Number(state.total) + Number(action.payload.price),
      };
    default:
      return state;
  }
}

// 초기화..어쩌구해서 찾아볼 것

// list: state.list.concat({
//   id: action.payload.id,
//   detail: state.list.detail.concat({
//     no: action.payload.no,
//     item: action.payload.item,
//     price: action.payload.price,
//   }),
// }),

// {
//     id: action.payload.id,
//     ...state.list,
//     detail: {
//       ...state.list.detail,
//       no: action.payload.no,
//       item: action.payload.item,
//       price: action.payload.price,
//     },
//   },
