const dbConnection = require('../mongo/mongodb');

const deleteInMongo = async () => {
  let data = await dbConnection();
  let result = await data.deleteMany({
    name: 'david'
  });

  console.log(result);
};

deleteInMongo();
