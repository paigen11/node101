var http = require('http'); //way to include core node module with name of 'http' (part of the base node framework)
// console.log(http);
var server = http.createServer(function(request, response){
	response.writeHead(200, {'content-type': 'text/html'})
	console.log("Server created");
	// console.log(request);
	console.log('%%%%%%%%%%%%%%%');
	// conosole.log(response);

	setTimeout(function(){
		console.log("world");
	}, 3000);
	console.log('Hello');

	response.end('<h1>Hello world</h1>');
});

server.listen(8000);
