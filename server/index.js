const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

let corsOption = {
  origin: 'http://localhost:3000', // 허락하는 요청 주소
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  optionsSuccessStatus: 200, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOption));

const mongoRouter = require('./routes/mongo');
app.use('/api', mongoRouter);

app.listen(port, () => {
  console.log(`app listening at port : ${port}`);
});
