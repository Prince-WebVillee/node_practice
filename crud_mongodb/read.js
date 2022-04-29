const dbConnection = require('./mongo/mongodb');

//read data from database

const getData = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log(data);
};
getData();
