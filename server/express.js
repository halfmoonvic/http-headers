const express = require('express');
const { sleep } = require('../util');

const app = express();

const router = express.Router();

router.get('/last-modified', async (req, res) => {
  const since = req.headers['if-modified-since'];
  const diff = new Date().getTime() - new Date(since).getTime();

  // cache 10 seconds
  if (since && diff < 10000) {
    // status 304, browser will read cache directly
    res.status(304);
    res.end();
  } else {
    res.setHeader('Last-Modified', new Date().toString());

    await sleep(2000);
    res.end('express last-modified if-modified-since');
  }
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
