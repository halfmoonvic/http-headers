const express = require('express');
const app = express();

const router = express.Router();

router.get('/content-length', (req, res) => {
  // overwritten by express 17
  res.header('content-length', 19);

  res.send('ExpressHelloWorld'); // length 17
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
