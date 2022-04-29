const mongoose = require("mongoose");

const db =
  "mongodb+srv://prince26:prince%40123@ecommerce.1s9cl.mongodb.net/PK_STORE?retryWrites=true&w=majority";

const dbConnection = async () => {
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected successfully");
    })
    .catch((err) => console.log("no connection", err));
};
dbConnection();
module.exports = dbConnection;
