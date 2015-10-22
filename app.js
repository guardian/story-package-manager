// Enable requires from root path
global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const application = require('./controllers/application');
const env = process.env.NODE_ENV || 'development';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (env !== 'production') { // compile scss on the fly
    app.use('/assets/stylesheets/compiled',
        require('node-sass-middleware')({
            src: path.join(__dirname, '/public/stylesheets/'), //where the sass files are
            dest: path.join(__dirname, '/public/stylesheets/compiled'), //where css should go
            debug: true
        })
    );
}

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.get('/', application.isomorphic);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
