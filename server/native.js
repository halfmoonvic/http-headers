const http = require('http');
const server = http.createServer();
const { sleep } = require('../util');

server.on('request', async (req, res) => {
  if (req.url.indexOf('/cache-control') > -1) {
    // cache 10 seconds
    // in the 10 seconds the result will be responded at aright from disk cache
    // after the 10 seconds the time is 2 seconds again
    res.setHeader('Cache-Control', 'max-age=10');

    await sleep(2000);

    res.end('native 2 seconds result');

    return;
  }

  if (req.url.indexOf('/expires') > -1) {
    // cache 10 seconds
    res.setHeader('Expires', new Date(new Date().getTime() + 10000));

    await sleep(2000);

    res.end('native 2 seconds result');

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
