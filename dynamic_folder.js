const fs = require('fs');
var name = 'b@gmail.com';
fs.mkdir(`./uploads/${name}`, function () {
  fs.statSync(`./uploads/${name}`).isDirectory(); //will be created at this point
});
