const  http = require("http");

http
    .createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('Module HTTP Mobile and Web');
    res.write("<H1>Module HTTP Mobile and Web menggunakan h1</H1>");

    res.end();
})
.listen(3400)