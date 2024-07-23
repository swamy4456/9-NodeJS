//integration with node with json : Data write and read
const fs=require("fs");
const bioData = {
    name: "Rahul",
    age: 25,
    skill:"NodeJS programmer"
} 
console.log(bioData);
const jsonData = JSON.stringify(bioData);
fs.writeFile("testjson.json",jsonData,(err)=>{
    console.log("Process Completed....");
});
fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log(data);
})