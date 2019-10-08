
var express = require('express');
var router = express.Router();
var db = require('../mysql/db');
router.get('/', function(req, res) {
    db.query('select * from tab_home ', function (row) {
        console.log(row);
        res.render('home', {row: row});
    });
});
/*const con=4;
let index=0;

router.get('/', function(req, res) {
    var pageIndex = req.body.pageIndex;
    var home_img = req.body.home_img;
    var home_txt = req.body.home_txt;
    var home_txt1 = req.body.home_txt1;
    db.query('select * from tab_home limit "'+home_img+'","'+home_txt+'","'+home_txt1+'"', function (row) {
        console.log(row);

        res.render('home', {row: row,index:index});
    });
});

router.get('/',function (req,res) {
    index = req.body.pageIndex;
    console.log("pageIndex" + index);
    db.query('select * from tab_home limit "'+home_img+'","'+home_txt+'","'+home_txt1+'"', function (row) {
        console.log(row);
        res.json(row);
    })

});
*/

module.exports = router;
