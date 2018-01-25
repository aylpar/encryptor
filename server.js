var path = require('path');
var express = require('express');
var app = express(); 
var port = 1600; 
app.listen(process.env.PORT || port, function(){
    console.log('cybertronian');
});

app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response){
    response.sendFile(path.resolve(__dirname, '/public', 'index.html'));
    
});