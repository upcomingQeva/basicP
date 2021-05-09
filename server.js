//Implement simple HttpServer
var http=require('http');
http.createServer(function(request,response){
    //Send HTTP header
    //HTTP status value: 200: OK
    //Content type: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    
    //Send response data "hello world"
    response.end('hello world\n');
}).listen(8888);

//The terminal prints the following information
console.log('Server runnung at http://127.0.0.1:8888/');
