require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var speciesRouter = require('./routes/species');
var blockRouter = require('./routes/block');
var pohonRouter = require('./routes/pohon');
var pancangRouter = require('./routes/pancang');
var tiangRouter = require('./routes/tiang');
var perduRouter = require('./routes/perdu');
var semaiRouter = require('./routes/semai');
var herbaRouter = require('./routes/herba');
var ikhRouter = require('./routes/ikh');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/spesies', speciesRouter);
app.use('/blok', blockRouter);
app.use('/pohon', pohonRouter);
app.use('/pancang', pancangRouter);
app.use('/tiang', tiangRouter);
app.use('/perdu', perduRouter);
app.use('/semai', semaiRouter);
app.use('/herba', herbaRouter);
app.use('/ikh', ikhRouter);

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
