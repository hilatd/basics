var express = require('express');
var app = express();

var events = require('events');

var eventsEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('connection sucesful');

    eventsEmitter.emit('data_received');
}

eventsEmitter.on('connection',connectHandler);

eventsEmitter.on('data_received',function(){
    console.log('data received succesfully');
});


app.get('/', function (req,res){
   
    eventsEmitter.emit('connection');
    res.send('finished');
    
});
app.get('/t', function (req,res){
    res.send('you are on a magical mystery tour!');
    
});
app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});