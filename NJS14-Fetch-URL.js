//httpRequest.js
const https = require("https");
//https://jsonplaceholder.typicode.com/todos/1
https.get('https://jsonplaceholder.typicode.com/todos/1',(resp) => {
    let data = '';
    //A chunk of data has been received.
    resp.on('data',(chunk) =>{
        data += chunk;
    });
    //The whole response has been received. Print out the result.
    resp.on('end',() =>{
        console.log(JSON.parse(data));
        console.log(data);
    });
}).on("error", (err)=>{
    console.log("Error: " + err.message);
})