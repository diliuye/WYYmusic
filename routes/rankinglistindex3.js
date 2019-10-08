var express = require('express');
var router = express.Router();


router.get('/',function (req,res) {
    res.render('rankinglistindex3');
});
module.exports = router;
