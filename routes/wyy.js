var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.post('/', function(req, res, next) {
    res.render('wyy', { title: 'Express' });
});*/

router.get('/', function(req, res, next) {
    res.render('wyy', { title: 'Express' });
});

module.exports = router;