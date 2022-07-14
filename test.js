// var http = require('http');

// const req = http.request('http://8.210.91.28:4000/', (res) => {
//   let data = '';

//   res.on('data', function (chunk) {
//     data += chunk;
//   });

//   res.on('end', function () {
//     console.log('http.request end data:', data.toString());
//   });
// });

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// req.end();

// // 请求今天是周几

// const date = new Date();
// console.log(date.getDay());