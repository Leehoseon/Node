const express = require('express');
const router = express.Router();

module.exports = function(app){
    router.route('/').get(function(req,res){
        console.log('/ route1');

        res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
        res.write('<h1>route1</h1>');
        res.end();
    })
    return router;
}
