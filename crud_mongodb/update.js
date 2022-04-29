const dbConnection = require('../mongo/mongodb');

const updateInMongo = async () => {
  let data = await dbConnection();
  let result = await data.updateMany(
    { name: 'stefen' },
    {
      $set: { name: 'jhony', email: 'jhony@gmail.com' }
    }
  );
  console.log(result);
};

updateInMongo();
