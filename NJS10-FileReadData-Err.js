//readFile.js
const fs = require('fs');
//the file is not found then error occurs -4058errno: -4058,code: 'ENOENT',syscall: 'open',path: 'D:\\UIdevelopment\\9-NodeJS\\myramdata1.txt'
fs.writeFileSync("myramdata1.txt","the file is greatest");
fs.readFile('myramdata1.txt',"utf-8",(err,data) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});