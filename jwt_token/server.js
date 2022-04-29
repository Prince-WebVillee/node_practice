const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

const createToken = async () => {
  const token = await jwt.sign(
    { _id: '624587a0b37fd995ecafe9d8' },
    'hellomynameisprincedwivediiamfullstackdeveloper'
  );
  console.log(token);
  const userVer = jwt.verify(
    token,
    'hellomynameisprincedwivediiamfullstackdeveloper'
  );
  console.log(userVer);
};

createToken();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
