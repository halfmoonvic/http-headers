let idCounter = 0;
function randomString() {
  return `${new Date().getTime().toString(16)}_${idCounter++}`;
}

function jsonp(url, params, callbackName) {
  const target = document.getElementsByTagName('script')[0] || document.head;
  const script = document.createElement('script');
  callbackName = callbackName || '_' + randomString();

  let data = '';
  if (params) {
    for (const key in params) {
      data += `${key}=${params[key]}&`;
    }
  }
  data += `callback=${callbackName}`;
  script.src = `${url}?${data}`;

  return new Promise((resolve, reject) => {
    target.parentNode.insertBefore(script, target);

    // 在后端返回执行函数后，执行调用
    window[callbackName] = function (data) {
      resolve(data);
      script.parentNode.removeChild(script);
    };
  });
}

jsonp('http://localhost:3000/jsonp', {
  server: 'native',
})
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log('err', err);
  });

jsonp('http://localhost:3001/jsonp', {
  server: 'express',
})
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log('err', err);
  });
