var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/',function(req,res){
    res.send('Hello Rahul');
});
app.get('/rahul',function(req,res){
    res.send('Hello ramya');
});
app.listen(port, function(err){
  console.log('running on port '+ port );
});


