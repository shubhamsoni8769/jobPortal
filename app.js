const express = require('express')
const bodyParser = require('body-parser');
const register = require('./router/register')
const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/register', register)

app.get('/', function (req, res) {
  res.send('hello world');
  console.log("hi");
})
  
app.listen(port, ()=>{
  console.log('server start');
});
  module.exports = app