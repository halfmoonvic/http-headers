const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.headers.origin); // http://localhost:8080
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');

  if (
    req.url.indexOf('/no-simple-request/put') > -1 &&
    req.method === 'OPTIONS'
  ) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Authorization, X-Custom-Header',
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );

    res.end('native perlight respond option');
    return;
  }

  if (req.url.indexOf('/no-simple-request/put') > -1 && req.method === 'PUT') {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');

    res.end('native the true request respond');
    return;
  }

  res.end('Not Found');
});

const port = 3000;
server.listen(port, () => {
  console.log(
    `Native Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
