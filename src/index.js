const http = require('http');
const fetch = require('node-fetch');
var sunTzu = require('sun-tzu-quotes');

const hostname = '0.0.0.0';
const port = 30100;

let imageUrl = '';
async function setImageUrl() {
  const response = await fetch(process.env.RANDOM_IMAGE_URL);
  const result = await response.text();
  imageUrl = result;
}
setImageUrl();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.end(`<h3>${sunTzu()}</h3><br /> <img src="${imageUrl}">`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
