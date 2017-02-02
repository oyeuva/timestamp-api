var express = require('express');
var app = express();
var path = require('path');
var moment = require('moment');

app.get('/', function(req,res){
    //res.end('Hello Worasdld!');
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/:ds', function(req,res){
    var ds = req.params.ds;
    //var date = {unix: '', natural: ''};
    var unix = null;
    var natural = null;
    if(+ds>0){
        unix = +ds;
        natural = moment(+ds, 'X').format('MMMM D, YYYY');
    }
    else if (isNaN(+ds) && moment(ds, 'MMMM D, YYYY').isValid()){
        unix = moment(ds, 'MMMM D, YYYY').format('X');
        natural = ds;
    }
    
    var result = {unix: unix, natural: natural};
    
    res.send(result);
    
});


app.listen(process.env.PORT, function(){
    console.log('port is 8080!');
});