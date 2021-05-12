const express = require('express');
const app = express();

const router = express.Router();

// 接收预检请求
router.options('/no-simple-request/put', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-Custom-Header');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  );
  next();
});

// 正常的接受 用户发起的请求，与非简单请求或者非跨域请求是一样的了
router.put('/no-simple-request/put', function (req, res) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.end('express no-simple-request put');
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
