const express = require('express');
const bodyParser = require('body-parser');
function personDetail(){
    return ["Femi",
           "Tallinn Estonia"]
}
const app = express();
const route = express.Router();

app.use(bodyParser.json());

route.get('/', (req, res) => {
  res.send(personDetail());
});

app.use(route);

app.listen(process.env.PORT || 3000);