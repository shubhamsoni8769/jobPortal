const express = require('express')
const bodyParser = require('body-parser');
const register = require('./router/register')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/register', register)

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
  app.listen(3000);
  module.exports = app