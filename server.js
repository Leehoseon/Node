const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const router = express.Router();
const ejs = require('ejs');
const path = require('path');
const express_session = require('express-session');
const cookie_parser = require('cookie-parser');
const body_parser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

/* db connect */
var db;
var db_url = "mongodb://localhost";
function dbConnect(){
    mongoClient.connect(db_url,function(err,client){
        if(err){
            console.log('db connect error');
            return;
        }
        console.log('db connect success');
        db = client.db('car');
    })
}
dbConnect();
/* db connect */

/* server setting */
app.set('port',3000);
app.use('/public',static(path.join(__dirname,'public')));
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(express_session({
    secret:'my key',
    resave: true,
    saveUninitialized: true
}));

app.use(cookie_parser());
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
/* server setting */


/* router mapping */
const test_route = require('./route/route_1.js')(app);
const cookie_route = require('./route/cookie.js')(app);
const session_route = require('./route/session.js')(app);
const photo_route = require('./route/photo.js')(app);
const mongo_route = require('./route/mongojs.js')(app,db);

app.use('/',router);
app.use('/route',test_route);
app.use('/session',session_route);
app.use('/cookie',cookie_route);
app.use('/photo',photo_route);
app.use('/mongo',mongo_route);
/* router mapping */


/* hello world */
router.route('/').get(function(req,res){
    console.log('/ 요청');
    
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    res.write('<h1>Hello World</h1>');
    res.end();  
});
/* hello world */


/* server start */
const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log("http://localhost:%d", app.get('port'));
})
/* server start */