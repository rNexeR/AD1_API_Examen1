/**
 * Module dependencies.
 */
var bodyparser = require('body-parser');
var express = require('express')
  , index = require('./routes')
  , http = require('http')
  , connection = require('./connection')
  , routes = require('./routes/routes')
  , cors = require('cors');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(cors());

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.options('*', cors());

connection.init();
routes.configure(app);

app.get('/', index.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port %s in %s mode.",  app.get('port'), app.settings.env);
});
