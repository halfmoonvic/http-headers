import axios from 'axios';

axios({
  method: 'get',
  url: '/proxy/native/last-modified',
  params: {
    server: 'native',
  },
});

axios({
  method: 'get',
  url: '/proxy/express/last-modified',
  params: {
    server: 'express',
  },
});
