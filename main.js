var express = require('express'),
  stylus  = require('stylus'),
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


app.get('/api/stats', api.stats);
app.get('/api/info/:module(@\\w+/\\w+|\\w+)', api.info);

var port = process.env.PORT || 3200;
console.log('Listening on ' + port);

app.listen(port);
