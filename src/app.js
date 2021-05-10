import axios from 'axios';

axios({
  method: 'post',
  url: '/proxy/native/login',
  params: {
    server: 'native',
  },
  data: {
    username: 'Fred',
    password: '123456',
  },
}).then(res => {
  axios({
    method: 'get',
    url: '/proxy/native/user',
    params: {
      server: 'native',
    },
  });
});
