const express = require('express');
const app = express();

const router = express.Router();

router.get('/jsonp', function (req, res) {
  const cb = req.query.callback;
  // _1795f032431_0({"server":"express","callback":"_1795f032431_0"})
  res.send(`${cb}(${JSON.stringify(req.query)})`);
});

app.use(router);

const port = process.env.PORT || 3001;
module.exports = app.listen(port, () => {
  console.log(
    `Express Server listening on http://localhost:${port}, Ctrl+C to stop`,
  );
});
