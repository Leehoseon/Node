//static 미들웨어 사용
const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');

app.set('port',3000);

app.use('/public',static(__dirname + '/public'));

app.use(function(req,res,next){
    let resData = {
        name : '유인나',
        message : 'Hello~'
    }
    
    res.send(resData);
    res.end();
})


const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('http://localhost:%d', app.get('port'));
})
