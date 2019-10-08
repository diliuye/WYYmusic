var express = require('express');
var router = express.Router();
var db = require("../mysql/db");

const con=10;
let index=0;

router.get('/', function(req, res) {
    index=0;
    var pageIndex = req.body.pageIndex;
    db.query('select * from home limit '+index+','+con,  function (row) {
        console.log(row);

        res.render('hometwo', {row: row,index:index});
    });
});

router.post('/',function (req,res) {
    index = req.body.pageIndex;
    console.log("pageIndex" + index);
    db.query('select * from home limit '+index+','+con, function (row) {
        console.log(row);
        res.json(row);
    })

});
module.exports = router;
