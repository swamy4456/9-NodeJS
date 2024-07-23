//CURD Operations using FS Module
const fs = require('fs');
//#2.Create a file in it name "readme.txt" and add data in
fs.writeFileSync("CURD/readme.txt","This is read file");