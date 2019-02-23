//res.send() : 객체를 브라우저로 전송 HTML JSON DOCKER? 계열 

const http = require('http');
const express = require('express');
const app = express();

app.set('port',3000);

app.use(function(req,res,next){
    let resData = {
        name : '유인나',
        message : 'Hello~'
    }
    
    res.send(resData);
    res.end();
})

app.use('/',function(req,res,next){
    console.log("두번째");
    res.write('<h1>두번째 미들웨어 호출</h1>');
    res.end();
})

const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('http://localhost:%d', app.get('port'));
})
