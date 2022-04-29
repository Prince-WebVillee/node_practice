const fs = require('fs');
const { PassThrough, Duplex } = require('stream');
const readableStream = fs.createReadStream('sample.mp4');
const writableStream = fs.createWriteStream('copy.mp4');

class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _read() {}

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }
  _final() {
    this.push(null);
  }
}

const report = new PassThrough();
const throttle = new Throttle(100);

let total = 0;
report.on('data', (chunk) => {
  total += chunk.length;
  console.log('Bytes : ', total);
});

readableStream.pipe(throttle).pipe(report).pipe(writableStream);
