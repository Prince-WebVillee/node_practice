const fs = require('fs');

const read = fs.createReadStream('data.txt', { encoding: 'utf-8' });
//here use of WriteStream gives true false that chunk is recieved or not
const write = fs.WriteStream('data3.txt');

read.on('data', (chunk) => {
  console.log('chunk recieved');

  console.log(write.write(chunk));
});
