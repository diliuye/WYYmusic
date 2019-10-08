var express = require('express');
var router = express.Router();
var db = require("../mysql/db");
router.post('/', function(req, res, next) {
    var user = req.body.user;
    var pass = req.body.pass;
    db.query('select * from tab_user where user_name ="'+user+'" and pass_word = "'+pass+'"',function (row) {
        console.log(row)
        if (row.length == 0){
            res.render('login',{err:'用户登录失败'})
        }else{
            res.redirect('/')
        }

    })

});

module.exports = router;