var express = require('express');
var router = express.Router();
var db = require("../mysql/db");
/* GET home page. */
/*router.post('/', function(req, res, next) {
    res.render('wyy', { title: 'Express' });
});*/

router.post('/', function(req, res,next) {
    var user = req.body.user;
    var pass = req.body.pass;
    db.query('select * from tab_user where user_name="'+user+'"',function(row){
        console.log(row);
        if(row.length == 0){

            db.query('insert into tab_user values("'+user+'","'+pass+'")',function (row) {
                console.log(row);
            });
            res.redirect('/');
        }
        else {
            res.redirect('/register');
        }
    });
});

module.exports = router;