const http = require('http');
const coolImages = require('cool-images');
var sunTzu = require('sun-tzu-quotes')

const hostname = '0.0.0.0';
const port = 9110;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.end(`<center><img src="${coolImages.one(600, 800)}"><h3>${sunTzu()}</h3></center>`);
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var count = 0;
function start(){
    console.log(count++);
    setTimeout(start, 1000);
}
start();