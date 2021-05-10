const express = require('express');
const app = express();

const router = express.Router();

router.get('/transfer-encoding', (req, res) => {
  res.header('Content-Type', 'text/html; charset=utf8');
  res.header('Transfer-Encoding', 'chunked');

  res.write('<p>express 第一次传输</p>');
  setTimeout(() => {
    res.write('<p>express 第二次传输</p>');
    setTimeout(() => {
      res.write('<p>express 第三次传输</p>');
      res.end();
    }, 1000);
  }, 2000);
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
