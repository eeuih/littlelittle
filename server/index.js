const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

const mongoRouter = require('./routes/mongo');
app.use('/mongo', mongoRouter);

app.listen(port, () => {
  console.log(`app listening at port : ${port}`);
});
