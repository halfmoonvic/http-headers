import axios from 'axios';

axios({
  method: 'get',
  url: '/proxy/native/simple/test',
  params: {
    server: 'native',
  },
});

axios({
  method: 'get',
  url: '/proxy/express/simple/test',
  params: {
    server: 'express',
  },
});

axios({
  method: 'get',
  url: '/proxy/github/users',
});
