//CURD Operations using FS Module
const fs = require('fs');
//Add more data(append the data) in "readme.txt" and add data in
fs.appendFileSync("CURD/readme.txt","\n This is append data");