const http = require('http');
const uuid = require('uuid/v1');
const util = require('util');
const querystring = require('querystring');

const server = http.createServer();

const users = {
  admin: 'admin@123',
  Fred: '123456',
};
const session = {};

server.on('request', (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const params = querystring.parse(url.split('?')[1]);

  const resData = {
    method,
    url,
    path,
    params,
  };

  if (path === '/login' && method.toUpperCase() === 'POST') {
    res.setHeader('Content-type', 'application/json');

    let postData = '';

    req.on('data', function (chunk) {
      postData += chunk.toString();
    });

    req.on('end', function () {
      const { username, password } = JSON.parse(postData);

      if (users[username] === password) {
        res.setHeader('Set-Cookie', [
          `name=${username}; httpOnly=false`,
          `age=28; Expires=${new Date(Date.now() + 1000 * 10).toGMTString()}`,
          `address=${encodeURIComponent('回龙观')}; max-age=10`,
        ]);

        resData.msg = 'login succeed';
        res.end(JSON.stringify(resData));
      } else {
        res.end(JSON.stringify({ msg: 'login failed' }));
      }
    });
    return;
  }

  if (path === '/user' && method.toUpperCase() === 'GET') {
    res.setHeader('Content-type', 'text/plain');

    const user = querystring.parse(req.headers['cookie'], '; ')['name'];
    res.end(user);

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

// 登录成功:
// req.getSession().setAttribute('user', name);

// 从HttpSession获取当前用户名:
// String user = (String) req.getSession().getAttribute("user");

// 从HttpSession移除用户名:
// req.getSession().removeAttribute('user');
