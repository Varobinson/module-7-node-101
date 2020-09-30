const http =require('http')
const port = 3000
const host = '127.0.0.1'
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})
server.listen(3000,'127.0.0.1',() => {
    console.log(`Server Has Started Listening @ http://${host}:${port}`)
})