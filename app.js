var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

var app = express();
var server = require('http').Server(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

<<<<<<< HEAD
server.listen(process.env.PORT || 5000);
=======
server.listen(process.env.PORT || 8080);
>>>>>>> f275240c49ff33c2c36443ae282662e751af6e23
