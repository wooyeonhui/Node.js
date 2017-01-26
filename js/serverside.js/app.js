var express = require('express');
var app = express();
app.get('/',function(req, res){
  res.send('Hello home page');
});
app.get('/login',function(req, res){
  res.send('<h1>login please</h1>');
});
// /hello ->홈에 hello 페이지  경로
//get ->라우터(길을 찾는다 )
app.listen(3000,function(){
    console.log('Connected 3000 port!');
});
