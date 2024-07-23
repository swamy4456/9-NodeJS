const fs=require("fs");
const data = fs.readFileSync("myNewData.txt","utf-8");
console.log(data);
//here we check the exception handling and utf-8 (with out using two var)
fs.readFile("info.txt","utf-8",(err,data) => {
    console.log(data);
})