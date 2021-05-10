const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url.indexOf('/content-length') > -1) {
    req.setTimeout(5000);

    // wait and failed
    // res.setHeader('content-length', 100);
    // node add content-length automatically
    res.end('NativeHelloWorld'); // length 16

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
