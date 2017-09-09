const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello Docker!</h1>\n");
});

server.listen(3000);