import axios from 'axios';

axios({
  method: 'get',
  url: '/proxy/native/transfer-encoding',
  params: {
    server: 'native',
  },
});

axios({
  method: 'get',
  url: '/proxy/express/transfer-encoding',
  params: {
    server: 'express',
  },
});
