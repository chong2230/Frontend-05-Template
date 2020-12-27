const http = require('http');

const hostname = '127.0.0.1'
const port = 8088

const server = http.createServer((req, res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain')
    // res.end('你好世界\n')

    let body = [];
    req.on('error', (err)=>{
        console.log(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', ()=>{
        console.log(typeof body, body instanceof Array);
        // body = Buffer.concat(body).toString();
        console.log("body", body);
        res.writeHead(200, {'Content-Type': 'text/html'});
        // res.end(' Hello World\n');
        res.end(
            `<html maaa=a >
            <head>
                <style>
            body div #myid {
                width: 100px;
                background-color: #ff5000;
            }
            body div img {
                width: 30px;
                background-color: #ff1111;
            }
            </style>
            </head>
            <body>
                <div>
                    <img id="myid"/>
                    <img />
                </div>
            </body>
            </html>`);
    })
})

server.listen(port);

console.log(`服务器运行在http://${hostname}:${port}/`)