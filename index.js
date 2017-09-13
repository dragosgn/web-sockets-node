var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>this is a node chatttt</h1>')
})


http.listen(3000, function(){
  console.log('listening on port: 3000')
})
