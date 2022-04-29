const fs = require('fs');
const first = fs.readFileSync('../content/first.txt','utf8')
console.log(first)

const second =fs.readFile('../content/second.txt','utf8',(err,data)=>{

console.log(data)
})
