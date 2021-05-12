import axios from 'axios';

// do not proxy by webpack
const fetchNative = axios.create({ baseURL: 'http://localhost:3000' });
const fetchExpress = axios.create({ baseURL: 'http://localhost:3001' });

fetchNative({
  method: 'get',
  url: '/simple-request/get',
  params: {
    server: 'native',
  },
});

fetchNative({
  method: 'get',
  url: '/simple-request/head',
  params: {
    server: 'native',
  },
});

fetchNative({
  method: 'get',
  url: '/simple-request/post',
  params: {
    server: 'native',
  },
});

fetchExpress({
  method: 'get',
  url: '/simple-request/get',
  params: {
    server: 'express',
  },
});

fetchExpress({
  method: 'head',
  url: '/simple-request/head',
  params: {
    server: 'express',
  },
});

fetchExpress({
  method: 'post',
  url: '/simple-request/post',
  params: {
    server: 'express',
  },
});
