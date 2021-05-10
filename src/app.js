import axios from 'axios';

axios({
  method: 'get',
  url: '/proxy/native/content-length',
  params: {
    server: 'native',
  },
});

axios({
  method: 'get',
  url: '/proxy/express/content-length',
  params: {
    server: 'express',
  },
});
