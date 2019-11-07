

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('Hello World!');
  res.end();
}).listen(8080);

///////Add header
//// The first argument of the res.writeHead() method is the status code, 200 
///means that all is OK, 
////the second argument is an object containing the response headers.
