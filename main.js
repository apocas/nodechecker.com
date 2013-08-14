var express = require('express'),
  stylus  = require('stylus'),
  routes = require('./routes'),
  api     = require('./routes/api');

var app = express();

app.configure(function(){
  this
    .use(express.cookieParser())
    .use(express.bodyParser())
    .use(express.errorHandler({dumpException: true, showStack: true}));
});

app.configure(function(){
 this
   .set('views', __dirname + '/views')
   .set('view engine', 'jade')
   .use(stylus.middleware({
     src: __dirname + '/public',
     compile: compile
     }))
   .use(express.static(__dirname + '/public'))
   .use(app.router);
});

function compile(str, path){
  return stylus(str)
    .set('filename', path)
    .include(nib.path);
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/api/stats', api.stats);
app.get('/api/info/:module', api.info);

app.get('*', routes.index);


var port = process.env.PORT || 3200;
console.log('Listening on ' + port);

app.listen(port);