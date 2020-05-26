const fs = require('fs')
const path = require('path')
const http = require('http')

const HEADER_CONTENT_TYPE = {
  'Content-Type': 'application/json; charset=UTF-8',
}
const HEADER_CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET',
}

const pathToFile = path.join(__dirname, 'data.json')
const data = fs.readFileSync(pathToFile)

const server = http.createServer((req, res) => {
  if (req.url === '/data') {
    res.writeHead(200, {...HEADER_CONTENT_TYPE, ...HEADER_CORS})
    res.end(data)
  } else {
    res.writeHead(404, HEADER_CORS)
    res.end('Not Found')
  }
})

server.listen(4321)
