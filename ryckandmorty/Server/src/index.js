const http = require('http');
const characters = require('./utils/data')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url.includes('/rickandmorty/character')) {
    let id = req.url.split('/').at(-1);
    let characterFilter = characters.filter(char => char.id === Number(id));

    res.writeHead(200, {"content-type": "application/json"}).end(JSON.stringify(characterFilter))
console.log(characterFilter)

  }

}).listen(3001, 'localhost');