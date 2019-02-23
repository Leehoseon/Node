const express = require('express');
const router = express.Router();

module.exports = function(app){
    router.route('/login').post(function(req,res){
        console.log('login page');
        if(req.session.user){
            console.log("이미로그인");
            res.redirect('/public/login.html');

        }else{
            var paramId = req.body.id;
            var paramPassword = req.body.password;
            req.session.user = {
                id:paramId,
                namd:"이호선",
                authorized:true
            }
            console.log("로그인");
            res.write('<p><a href="/process/product"</p>');
        }

        res.end();

    });
    return router;
}




