const fs = require('fs')
const path = require('path')
const http = require('http')

const pathToFile = path.join(__dirname, 'data.json')
const data = fs.readFileSync(pathToFile)

const server = http.createServer((req, res) => {
  if (req.url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' })
    res.end(data)
  } else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(4321)
