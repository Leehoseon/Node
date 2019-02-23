const express = require('express');
const app = express();
const router = express.Router();

router.route('/').get(function(req,res){
    console.log('/ route1');
    
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    res.write('<h1>route1</h1>');
    res.end();
})

module.exports = router; // 모듈로 만드는 부분