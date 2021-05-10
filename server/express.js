const express = require('express');
const { sleep } = require('../util');

const app = express();

const router = express.Router();

router.get('/cache-control', async (req, res) => {
  // cache 10 seconds
  // in the 10 seconds the result will be responded at aright from disk cache
  // after the 10 seconds the time is 2 seconds again
  res.setHeader('Cache-Control', 'max-age=10');

  await sleep(2000);

  res.end('express 2 seconds result');
});

router.get('/expires', async (req, res) => {
  // cache 10 seconds
  res.setHeader('Expires', new Date(new Date().getTime() + 10000));

  await sleep(2000);

  res.end('express 2 seconds result');
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
