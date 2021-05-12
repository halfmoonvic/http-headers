const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.headers.origin); // http://localhost:8080
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');

  if (req.url.indexOf('/simple-request/get') > -1) {
    res.end('native simple-request get');
    return;
  }

  if (req.url.indexOf('/simple-request/head') > -1) {
    // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD
    // HEAD 方法的响应不应包含响应正文. 即使包含了正文也必须忽略掉
    // res.end('native simple-request head');
    res.end();
    return;
  }

  if (req.url.indexOf('/simple-request/post') > -1) {
    res.end('native simple-request post');
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
