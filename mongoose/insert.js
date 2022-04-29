const db = require('./dbConnection');

const Schema = require('./schema');
db();
const Insert = async () => {
  const data = new Schema({
    name: 'Redmi Note 7 pro',
    price: 12000,
    password: 'hello'
  });

  let result = await data.save();
  console.log(result);
};

Insert();
