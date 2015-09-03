var express = require("express");
var app     = express();
var path    = require("path");


app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/root.html'));
});

app.listen(1337);

console.log("Running at Port 1337");
