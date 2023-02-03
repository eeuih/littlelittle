const express = require('express');
const router = express.Router();

const mongoDB = require('../controllers/mongoController');

router.post('/setdata', async (req, res) => {
  const msg = await mongoDB.setData();
  res.send(JSON.stringify(msg));
});

router.get('/getdata', async (req, res) => {
  const data = await mongoDB.getData();
  res.send(data);
});

router.post('/setgoal', async (req, res) => {
  const data = await mongoDB.setGoal(req, res);
});

router.post('/create', async (req, res) => {
  const data = await mongoDB.create(req, res);
});

router.post('/update', async (req, res) => {
  const data = await mongoDB.update(req, res);
});

router.post('/delete', async (req, res) => {
  const data = await mongoDB.delete(req, res);
});

router.post('/reset', async (req, res) => {
  const data = await mongoDB.reset(req, res);
});

module.exports = router;
