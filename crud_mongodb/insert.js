const dbConnection = require('../mongo/mongodb');

const insertInMongo=async()=>{

let db=await dbConnection()
const result=await db.insertMany([


    {name:'harry',email:'harry@gmail.com'},
    {name:'ronald',email:'ronald@gmail.com'},
    {name:'ron',email:'ron@gmail.com'},
    {name:'david',email:'david@gmail.com'},
    {name:'stefen',email:'stefen@gmail.com'},
])

if(result.acknowledged){

    console.log("data inserted")
}
}

insertInMongo()