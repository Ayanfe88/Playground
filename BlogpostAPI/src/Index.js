const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const blog = require("./controller/BLog.Controller");
 
app.post('/', blog.insertPost)
app.use(bodyParser.json)
app.post("/api/posts",blog.insertPost)
app.post("/api/posts",blog.getAllPost)
app.post("/api/posts/id;",blog.getOne)


app.get('/', function (req, res) {
    res.send('Hello Ayanfe')
  })
 
app.listen(3000)