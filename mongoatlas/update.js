const db = require('./db');
const Schema = require('./schema');
db();

const Update = async () => {
  let data = await Schema.updateOne(
    { price: 15000 },
    { $set: { name: 'redmi note 11 pro', password: 'hello' } }
  );

  console.log(data);
};

Update();
