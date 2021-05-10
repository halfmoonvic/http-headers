const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url.indexOf('/transfer-encoding') > -1) {
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    res.setHeader('Transfer-Encoding', 'chunked');

    res.write('<p>native 第一次传输</p>');
    setTimeout(() => {
      res.write('<p>native 第二次传输</p>');
      setTimeout(() => {
        res.write('<p>native 第三次传输</p>');
        res.end();
      }, 1000);
    }, 2000);

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
