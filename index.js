const http = require('http');
const server = http.createServer((req, res) => res.end('ok', 'utf8'));
server.listen(3000);
