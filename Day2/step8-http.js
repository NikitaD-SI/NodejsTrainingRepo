const http = require("node:http");

let server = http.createServer(function(req, res){
    res.write("Welcome to your life");
    res.end();
});

server.listen(1010,"localhost", function(error){
    error
    ? console.log("Error",error)
    : console.log("Server is now live on localhost:1010")
})