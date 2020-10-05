/**
 * Started to build a simple server

const http = require('http');

const server = http.createServer((req, response) => {
  console.log('headers', req.headers);
  console.log('method', req.method);
  console.log('url', req.url);
  const user = {
    name: 'john',
    hobby: 'coding'
  };

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
});

server.listen(3000);
*/