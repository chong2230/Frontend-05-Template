let http = require('http');
let fs = require('fs');

http.createServer(function(request, response){
    console.log(request.headers);
    // response.end("Hello world");

    let outFile = fs.createWriteStream("../server/publish/index.html");

    request.on('data', chunk => {
        console.log(chunk.toString());
        outFile.write(chunk);
    })
    request.on('end', chunk => {
        outFile.write(chunk);
        outFile.end();
        response.end('Success');
    })
}).listen(8082);