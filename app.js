var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/root.html'));
});

app.listen(port);

console.log("Running at Port 1337");
