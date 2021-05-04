const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url.indexOf('simple/test') > -1) {
    res.end('Native Hello World !');
  } else {
    res.end('Native Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(
    `Native Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
