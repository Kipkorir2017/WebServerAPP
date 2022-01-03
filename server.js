const http=require("http");

const host = 'localhost';
const port = 8000;


// request listener function
const requestListener=function(req,res){
	res.writeHead(200);
	res.end("Welcome TO web server");
};