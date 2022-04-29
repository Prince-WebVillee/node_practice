const fs = require('fs');

let data = 'this is a file';

fs.writeFile('../content/generic/file.txt', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file created successfully!!!');

    fs.readFile('../content/generic/file.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  }
});
