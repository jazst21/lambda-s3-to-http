// new express server
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');


var app = express();
// run server port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

// new route
app.get('/', function (req, res) {
  res.send('Hello World   pugarrrrr!');
});
// new route get
app.get('/get', function (req, res) {
  res.send('Hello World new getter');
});
