const mongoClient = require('../mongoConnect');
const _client = mongoClient.connect();

// 초기 상태 설정
const initState = {
  list: [
    {
      id: 0,
      day: '일',
      detail: [{ item: '', price: '' }],
    },

    {
      id: 1,
      day: '월',
      detail: [{ item: '', price: '' }],
    },
    {
      id: 2,
      day: '화',
      detail: [{ item: '', price: '' }],
    },
    {
      id: 3,
      day: '수',
      detail: [{ item: '', price: '' }],
    },
    {
      id: 4,
      day: '목',
      detail: [{ item: '', price: '' }],
    },
    {
      id: 5,
      day: '금',
      detail: [{ item: '', price: '' }],
    },
    {
      id: 6,
      day: '토',
      detail: [{ item: '', price: '' }],
    },
  ],

  total: '',
};

const totaltest = initState.list
  .map((el) => {
    const totalprice = el.detail.reduce((acc, obj) => {
      return Number(acc) + Number(obj.price);
    }, 0);
    return totalprice;
  })
  .reduce((acc, obj) => {
    return Number(acc) + Number(obj);
  }, 0);

initState['total'] = totaltest;

const mongoDB = {
  setData: async () => {
    const client = await _client;
    const db = client.db('littlelittle').collection('data');
    const result = await db.insertOne(initState);
    if (result.acknowledged) {
      return '업데이트 성공';
    } else {
      throw new Error('통신 이상');
    }
  },

  getData: async () => {
    const client = await _client;
    const db = client.db('littlelittle').collection('data');
    const data = await db.find({}).toArray();
    return data;
  },

  createItem: async (req, res) => {
    const client = await _client;
    const db = client.db('littlelittle').collection('data');
    console.log(req.body);
    res.send('하..');
    // const data = await db.find({id:req.body})
    // const result = await db.updateOne({ createData });
    // if (result.acknowledged) {
    //   return '입력 성공';
    // } else {
    //   throw new Error('입력 실패');
    // }
  },
};

module.exports = mongoDB;
