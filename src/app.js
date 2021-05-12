import axios from 'axios';

// do not proxy by webpack
const fetchNative = axios.create({ baseURL: 'http://localhost:3000' });
const fetchExpress = axios.create({ baseURL: 'http://localhost:3001' });

fetchNative({
  headers: {
    Authorization: 'Bear hahaaha',
    'X-Custom-Header': '1234567890',
  },
  method: 'put',
  url: '/no-simple-request/put',
  params: {
    server: 'native',
  },
});

fetchExpress({
  headers: {
    Authorization: 'Bear hahaaha',
    'X-Custom-Header': '1234567890',
  },
  method: 'put',
  url: '/no-simple-request/put',
  params: {
    server: 'express',
  },
});
