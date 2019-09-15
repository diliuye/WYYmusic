var express = require('express');
var router = express.Router();


router.get('/',function (req,res) {
    res.render('musiclist');
});
module.exports = router;
