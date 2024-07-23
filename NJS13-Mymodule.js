//Require the http module
var http = require('http');
//Require your custom module
var dt = require('./myModule');
//Create a HTTP Server
http.createServer(function (req,res){
    //Set the response header
    res.writeHead(200,{'Content-Type':'text/html'});
    //use the custom module to get the date and time
    res.write("The Date and time is currently: "+dt.myDateTime());
    //End the response
    res.end();
}).listen(8000);//Server listens on port 8000
//How to run..
//> nodemon NJS13-Mymodule.js
//copy below url to browser
//http://localhost:8000/
