const db = require('./dbConnection');
const Schema = require('./schema');
db();
const Read = async () => {
  let data = await Schema.find();
  console.log(data);
};

Read();
