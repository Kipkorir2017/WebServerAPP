const http=require("http");

const host = 'localhost';
const port = 8000;


// request listener function
const requestListener=function(req,res){
	res.writeHead(200);
	res.end("Welcome TO web server");
};

const server =http.createServer(requestListener);
server.listen(port,host,()=>{
	console.log(`Server is running on http://${host}:${port}`)
;})