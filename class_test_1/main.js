const http = require("http");
//const routes = require("./routes");
function nameFemi(){
    return "femi";
}
const routes = (req, res) => {
    res.write(nameFemi());
    res.end();
};
//create a server object:
http.createServer(routes).listen(8080);