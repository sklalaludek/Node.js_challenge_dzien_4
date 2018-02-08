//Twój kod
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end('Hello, World from back-end!');
});

server.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
