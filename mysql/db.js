var mysql = require('mysql');
var db = {};
db.query =function (sql, callback) {
    var connect = mysql.createConnection({
        host:'localhost',
        user:'root',
        password: '199809181',
        port:3306,
        database:'wyymusic'
    });
    connect.connect();
    connect.query(sql,function (err,row) {
        console.log(err);
        callback(row);
    });
    connect.end();
};
module.exports = db;









