const db = require('./dbConnection');
const Schema = require('./schema');
db();
const Update = async () => {
  let data = await Schema.updateOne(
    { price: '12000' },
    { $set: { name: 'redmi note 7' } }
  );
  console.log(data);
};

Update();
