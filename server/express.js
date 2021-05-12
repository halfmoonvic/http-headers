const express = require('express');
const app = express();

const router = express.Router();

router.all('*', function (req, res, next) {
  console.log(req.headers.origin); // http://localhost:8080
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  next();
});

router.get('/simple-request/get', function (req, res) {
  res.end('express simple-request get');
});

router.head('/simple-request/head', function (req, res) {
  // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD
  // HEAD 方法的响应不应包含响应正文. 即使包含了正文也必须忽略掉
  // res.end('express simple-request head');
  res.end();
});

router.post('/simple-request/post', function (req, res) {
  res.end('express simple-request post');
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
