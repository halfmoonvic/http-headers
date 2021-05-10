const http = require('http');
const server = http.createServer();
const { sleep } = require('../util');

server.on('request', async (req, res) => {
  if (req.url.indexOf('/last-modified') > -1) {
    const since = req.headers['if-modified-since'];
    const diff = new Date().getTime() - new Date(since).getTime();

    // cache 10 seconds
    if (since && diff < 10000) {
      // status 304, browser will read cache directly
      res.statusCode = 304;
      res.end();
    } else {
      res.setHeader('Last-Modified', new Date().toString());

      await sleep(2000);
      res.end('native last-modified if-modified-since');
    }

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
