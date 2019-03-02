const express = require('express');
const router = express.Router();

module.exports = function(app,db){
    
    var car = db.collection('car');
    
    router.route('/').get(function(req,res){
       car.find({},function(err,result){
           console.log(result);
       })
    });
    
    return router;
}


