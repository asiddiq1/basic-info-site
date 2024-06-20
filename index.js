let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    const fileMap = {
        '/': './info/index.html',
        '/about': './info/about.html',
        '/contact-me': './info/contact-me.html'
    }
    let filename;

    if (fileMap[req.url]){
        filename = fileMap[req.url]
    }
    else{
        filename = './info/404.html'
    }
    fs.readFile(filename, function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
    

}).listen(8080);
