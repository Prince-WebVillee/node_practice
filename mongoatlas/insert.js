const db = require('./db');

const Schema = require('./schema');
db();
const Insert = async () => {
  const data = await new Schema({
    name: 'Poco X4 Pro',
    price: 18000,
    password: 'abcdef'
  });
  let result = await data.save();
  console.log(result);
};

Insert();
