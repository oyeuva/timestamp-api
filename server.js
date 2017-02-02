var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.end('Hello Worasdld!');
});
app.listen(8080, function(){
    console.log('port is 8080!');
});