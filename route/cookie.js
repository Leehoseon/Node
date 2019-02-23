const express = require('express');
const router = express.Router();

module.exports = function(app){
    
    router.route('/showCookie').get(function(req,res){
        console.log("show cookie 호출");

        res.send(req.cookies);
    });

    router.route('/setUserCookie').get(function(req,res){
        res.cookie('user',{
            id:"LEE",
            name:"이호선",
            authorized:true
        });
        res.redirect('/process/showCookie');
    });

    router.route('/').get(function(req,res){
        console.log('/ cookie');

        res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
        res.write('<h1>cookie</h1>');
        res.end();
    });
    
    return router;
}


