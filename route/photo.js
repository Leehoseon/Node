const express = require('express');
const router = express.Router();
const multer = require('multer');

// multer 객체 생성
let storage = multer.diskStorage({
    destination : function(req,res,callback){
        callback(null,'uploads');  
    },
    filename : function(req,file,callback){
        callback(null,file.fieldname + Date.now());  
    }
});

let upload = multer({
    storage : storage,
    limits : {
        files : 10,
        filesize : 1024 * 1024 * 1024 //1GB
    }
});

module.exports = function(app){
    router.route('/').post(upload.array('photo',1),function(req,res){ 
        try{    
            let files = req.files;
            console.dir(req.files[0]);
            let originalname = "";
            res.end();
        }catch{
            
        }
    });
    return router;
}




