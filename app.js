var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var layoutRouter = require('./routes/layout');
var musiclistRouter = require('./routes/musiclist');
var demoRouter = require('./routes/demo');
var friendsRouter = require('./routes/friends');
var singerRouter = require('./routes/singer');
var rankinglistindexRouter = require('./routes/rankinglistindex');
var rankinglistindex1Router = require('./routes/rankinglistindex1');
var rankinglistindex2Router = require('./routes/rankinglistindex2');
var rankinglistindex3Router = require('./routes/rankinglistindex3');
var rankinglistindex4Router = require('./routes/rankinglistindex4');
var wyyRouter = require('./routes/wyy');
var mymusicRouter = require('./routes/mymusic');
var downloadRouter = require('./routes/download');
var musicmanRouter = require('./routes/musicman');
var discoverRouter = require('./routes/discover');
var loginRouter = require('./routes/login');
var dengluRouter = require('./routes/denglu');
var zhuceRouter = require('./routes/zhuce');
var homeRouter = require('./routes/home');
var hometwoRouter = require('./routes/hometwo');
var playRouter = require('./routes/play');
var musicplayRouter = require('./routes/musicplay')
var xueRouter = require('./routes/xue')


var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/layout',layoutRouter);
app.use('/musiclist',musiclistRouter);
app.use('/demo',demoRouter);
app.use('/friends',friendsRouter);
app.use('/singer',singerRouter);
app.use('/rankinglistindex',rankinglistindexRouter);
app.use('/rankinglistindex1',rankinglistindex1Router);
app.use('/rankinglistindex2',rankinglistindex2Router);
app.use('/rankinglistindex3',rankinglistindex3Router);
app.use('/rankinglistindex4',rankinglistindex4Router);
app.use('/wyy',wyyRouter);
app.use('/mymusic',mymusicRouter);
app.use('/download',downloadRouter);
app.use('/musicman',musicmanRouter);
app.use('/discover',discoverRouter);
app.use('/login',loginRouter);
app.use('/denglu',dengluRouter);
app.use('/zhuce',zhuceRouter);
app.use('/home',homeRouter);
app.use('/hometwo',hometwoRouter);
app.use('/play',playRouter);
app.use('/musicplay',musicplayRouter)
app.use('/xue',xueRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
