const http = require('http');

http.createServer((req, res) => {
	res.write("<h1>Testing..</h1>");
	res.end();
}).listen(3000);

console.log("server started on port 3000")

