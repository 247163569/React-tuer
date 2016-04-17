// jshint ignore: start
var koa2 = require('koa');
var router = require('koa-router')();
var app = new koa2();
const port = 7877;

router.get('/', function *(next) {
  this.body = 'hi,tuer';
});

app.use(router.routes(),router.allowedMethods());

app.listen(port);

console.log('app run in http://localtion:' + port);
