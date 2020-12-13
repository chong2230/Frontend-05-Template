const http = require('http')

const hostname = '127.0.0.1'
const port = 8088

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Transfer-Encoding': 'chunked' });
    res.end(
`<html maaa=a >
<head>
    <style>
#container {
    width: 500px;
    height: 300px;
    display: flex;
    background-color: #FFFFFF;
}
#container #myid {
    width: 200px;
    height: 100px;
    background-color: #FF0000;
}
#container .c1 {
    flex: 1;
    background-color: #00FF00;
}
</style>
</head>
<body>
    <div>
        <div id="myid"/>
        <div class="c1" />
    </div>
</body>
</html>`);
}).listen(8088);

console.log('server start');

// server.listen(port, hostname, ()=>{
//     console.log(`服务器运行在http://${hostname}:${port}/`)
// })
