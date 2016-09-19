var dotenv = require("dotenv").load();

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'app_client/' )));

app.use('/api', routesApi);
app.use('/', routes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port, function () {
  console.log('Example app listening on port '+port);
});

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


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}