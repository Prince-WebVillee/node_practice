const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const database='demo'
let client = new MongoClient(url);

const dbConnection =async()=> {

let result=await client.connect();
let db=result.db(database)
return db.collection('users')
// let response=await collection.find().toArray()
// console.log(response)


};

// dbConnection().then((res)=>{


//     res.find().toArray().then(data=>console.log(data))
// })
// console.log(dbConnection())

// const main=async()=>{


// let data=await dbConnection();
//  data=await data.find({name:"john"}).toArray();
// console.log(data)
// }

// main()

module.exports=dbConnection