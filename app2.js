var http = require('http'); // include the HTTP module provided by core node
var fs = require('fs'); // include the file system module provided by core

function renderHomePage(req, res){
	var homePageHtml = fs.readFileSync('homePage.html');
	res.writeHead(200, {'content-type': 'text/html'})
	res.end(homePageHtml);
}

var server = http.createServer(function(req, res){
	console.log('Someone connected to the server');
	console.log(req.url);
	if(req.url == '/'){
		renderHomePage(req, res);
	}else if(req.url = '/logo.png'){
		var img = fs.readFileSync('logo.png');
		res.writeHead(200, {'content-type': 'image/png'});
		res.end(img, 'binary');	
	}else{
		res.writeHead(404, {'content-type': 'text/html'});
		res.end("Sorry this page does not exist");
	}
});

server.listen(8002); // this will make the node.js server we created above listen for traffic on port 8002.
// whenever someone makes a request at that port, the function inside the createServer will be run.

console.log("our server is listening on port 8002...");

