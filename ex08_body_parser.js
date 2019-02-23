//static 미들웨어 사용
const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const bodyParser = require('body-parser');

app.set('port',3000);

//static 미들웨어 지정 외부에서 정적 파일에 바로 접근 가능
app.use('/public',static(__dirname + '/public'));

//post 요청시 body에 지정된 요청 파라미터 사용
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/process/login',function(req,res,next){
    console.log('프로세스에 로그인 요청 됨');
    
    let paramId = req.body.id;
    let paramPwd = req.body.password;
    
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8'})
    
    res.write(`<p> ID : ${paramId}`);
    res.write(`<p> PW : ${paramPwd}`);
})

const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('http://localhost:%d', app.get('port'));
})
