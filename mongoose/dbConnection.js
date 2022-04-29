const mongoose = require('mongoose');

const db = async () => {
  mongoose.connect('mongodb://localhost:27017/mongoosedemo', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(()=>console.log("connected succesfully"))
  .catch(err=>console.log(err))
  
}
module.exports=db