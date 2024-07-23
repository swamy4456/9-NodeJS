const myhttp = require("http");
const server= myhttp.createServer((req,res)=>{
    res.end("Hello from server side: Karthik and hello my friend");
})
server.listen(9000,"127.0.0.1",()=>{
    console.log("Listening on port 9000:Karthik");
})