import axios from 'axios';

axios({
  method: 'get',
  url: '/proxy/native/cache-control',
  params: {
    server: 'native',
  },
});

axios({
  method: 'get',
  url: '/proxy/express/cache-control',
  params: {
    server: 'express',
  },
});

axios({
  method: 'get',
  url: '/proxy/native/expires',
  params: {
    server: 'native',
  },
});

axios({
  method: 'get',
  url: '/proxy/express/expires',
  params: {
    server: 'express',
  },
});
