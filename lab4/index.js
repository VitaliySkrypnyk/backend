const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  if (url === '/about') {
    res.write('<h1>About us page</h1>');
    return res.end();
  }

  if (url === '/contact') {
    res.write('<h1>Contact us page</h1>');
    return res.end();
  }

  res.write('<h1>Hello World!</h1>');
  res.write('<h2>My name Vitaliy</h2>');
  res.end();
});

server.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
