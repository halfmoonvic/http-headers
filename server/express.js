const express = require('express');
const app = express();

const router = express.Router();

router.get('/simple/test', (req, res) => {
  res.send('Express Hello World !');
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
