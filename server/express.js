const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const router = express.Router();

router.get('/', function (req, res) {
  res.send(
    fs.readFileSync(path.join(__dirname, '../src/another.html')).toString(),
  );
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
