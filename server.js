var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });

// var express = require('express');
// var app = express();
// 
// app.set("view options", {layout: false});
// app.use(express.static(__dirname + '/public'));
// 
// app.get('/', function(req, res) {
    // res.render('index.html');
// });

// spin up server
// var port = process.env.PORT || 5000;
// app.listen(port, function() {
   // console.log("Listening on " + port);
 // });
// app.use(express.static(__dirname + '/public'));
//var index = fs.readFileSync('./views/index.html');

// http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end(index);
// }).listen(8000);