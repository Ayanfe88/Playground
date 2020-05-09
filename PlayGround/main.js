const http = require("http");
//const routes = require("./routes");

const routes = (req, res) => {
    res.write('You got me');
    res.end();
};
//create a server object:
http.createServer(routes).listen(8080);



