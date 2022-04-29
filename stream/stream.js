const fs = require('fs');

const readableStream = fs.createReadStream('data.txt', {
  encoding: 'utf8'
});

const writableStream = fs.createWriteStream('data2.txt');

readableStream.on('data', (dataChunk) => {
  console.log('chunk recieved');
  writableStream.write(dataChunk)
});

//piping

// readableStream.pipe(writableStream);
