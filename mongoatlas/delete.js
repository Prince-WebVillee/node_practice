const db = require("./db");
const Schema = require("./schema");

db();

const Delete = async () => {
  let data = await Schema.deleteOne({
    price: 200,
  });
  console.log(data);
};

Delete();
