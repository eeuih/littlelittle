const { ObjectId } = require('mongodb');
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

  create: async (req, res) => {
    const client = await _client;
    const db = client.db('littlelittle').collection('data');
    const autoId = client.db('littlelittle').collection('counters');

    // auto_increment 함수..
    async function getNextSequence(name) {
      var ret = await autoId.findOneAndUpdate(
        { _id: name },
        {
          $inc: {
            seq: 1,
          },
        },
        { returnOriginal: false }
      );
      return ret.value.seq;
    }

    const data = await db.findOneAndUpdate(
      { 'list.id': req.body.id },
      {
        $push: {
          'list.$[t].detail': {
            no: await getNextSequence('no'),
            item: req.body.item,
            price: req.body.price,
            isContent: true,
          },
        },
        $set: {},
      },
      {
        arrayFilters: [{ 't.id': req.body.id }],
        returnOriginal: false,
        returnDocument: 'after',
      },

      function (err, data) {
        res.send(data.value.list[req.body.id].detail.at(-1));
      }
    );
    // console.log(data.value.list[req.body.id].detail.at(-1));
    // res.send(data.value.list[req.body.id]);
    //res.send(data.value.list[req.body.id].detail.at(-1).no);
  },
};

// const result = await db.aggregate([
//   { $project: { _id: 0, result: { $sum: 'list.$[0].detail.price' } } },
// ]);
// const result2 = await result.toArray();
// console.log(result2);
// https://www.mongodb.com/community/forums/t/how-can-i-update-nested-array-element-by-id/149857/5 몽고디비천재

module.exports = mongoDB;
