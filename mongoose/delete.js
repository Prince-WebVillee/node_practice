const db = require('./dbConnection');
const Schema = require('./schema');
db();
const Delete = async () => {
  let data = await Schema.deleteOne({
    price: 12000
  });

  console.log(data);
};

Delete();
