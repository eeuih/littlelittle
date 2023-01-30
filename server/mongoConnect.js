const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_URL_ATLAS =
  'mongodb+srv://neuih2:euih23@eeuih.tbxxexc.mongodb.net/?retryWrites=true&w=majority';
const uri = DB_URL_ATLAS;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = client;
