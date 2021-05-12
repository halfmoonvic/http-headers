const http = require('http');
const url = require('url');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url.indexOf('/jsonp') > -1) {
    const { query } = url.parse(req.url, true);
    const cb = query.callback;

    // _1795f032431_0({"server":"express","callback":"_1795f032431_0"})
    res.end(`${cb}(${JSON.stringify(query)})`);
    return;
  }

  res.end('Native Not Found');
});

const port = 3000;
server.listen(port, () => {
  console.log(
    `Native Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
